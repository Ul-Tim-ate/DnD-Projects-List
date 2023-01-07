import React, { useEffect, useState, useMemo, useContext } from "react";
import Dashboard from "../../dashboard/dashboard-table/dashboard";
import Header from "../../header/header";
import MyButton from "../../UI/my-button/my-button";
import MyInput from "../../UI/my-input/my-input";
import MyModal from "../../UI/my-modal/my-modal";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./tusks-page.sass";
import AddTaskForm from "../../forms/add-task-form/add-task-form";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  dropTusksAction,
  getTusksAction,
  setTusksAction,
  updateStatusTaskAction,
} from "../../../redux/actions/tusksActionCreater";
import { TusksState } from "../../../redux/reducers/tusks";
import { ServicesContext } from "../../..";
import { DbService } from "../../../services/dbService";

const getDisplayTasks = (
  header: string,
  state: TusksState,
  dbService: DbService
) => {
  const newTasksState: TusksState = JSON.parse(JSON.stringify(state));
  return dbService.getTasksByName(header, newTasksState);
};

function unique(arr: string[]) {
  const result: string[] = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const TusksPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const state: TusksState = useTypedSelector((state) => state.tusker);
  const { id }: { id: string } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const { projectId = "" } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getTusksAction(projectId));
    }
    return () => {
      dispatch(dropTusksAction());
    };
  }, [id]);
  const { dbService } = useContext(ServicesContext);
  const displayTasks = useMemo(() => {
    if (!state.getTasks) {
      return state;
    }
    return getDisplayTasks(searchText, state, dbService);
  }, [searchText, state]);

  const drugEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newState: TusksState = JSON.parse(JSON.stringify(displayTasks));
    let startIndex: number = -1;
    let finishIndex: number = -1;
    const startColumn = newState.columns.find((el, index) => {
      startIndex = index;
      return el.id === source.droppableId;
    });
    const finishColumn = newState.columns.find((el, index) => {
      finishIndex = index;
      return el.id === destination.droppableId;
    });

    if (!startColumn || !finishColumn) {
      return;
    }
    if (startColumn === finishColumn) {
      const newTasksIds = startColumn.taskIds;
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);
      const uniqueArr = [...newTasksIds, ...state.columns[startIndex].taskIds];
      const oldState: TusksState = JSON.parse(JSON.stringify(state));
      newState.columns[startIndex].taskIds = unique(uniqueArr);
      oldState.columns[startIndex].taskIds = [
        ...newState.columns[startIndex].taskIds,
      ];
      dispatch(setTusksAction(oldState));
      return;
    }
    // if column is different
    const startTaskIds = Array.from(startColumn.taskIds);
    const changeTask = startTaskIds.splice(source.index, 1);
    dispatch(updateStatusTaskAction(changeTask[0], destination.droppableId));
    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const oldState: TusksState = JSON.parse(JSON.stringify(state));
    oldState.columns[startIndex].taskIds = oldState.columns[
      startIndex
    ].taskIds.filter((task) => {
      return changeTask[0] !== task;
    });

    const uniqueArrStart = [
      ...startTaskIds,
      ...oldState.columns[startIndex].taskIds,
    ];
    const uniqueArrFinish = [
      ...finishTaskIds,
      ...oldState.columns[finishIndex].taskIds,
    ];
    newState.columns[startIndex].taskIds = unique(uniqueArrStart);
    newState.columns[finishIndex].taskIds = unique(uniqueArrFinish);
    oldState.columns[startIndex].taskIds = [
      ...newState.columns[startIndex].taskIds,
    ];
    oldState.columns[finishIndex].taskIds = [
      ...newState.columns[finishIndex].taskIds,
    ];
    dispatch(setTusksAction(oldState));
  };

  return (
    <div className="tusks-page">
      <Header />
      <div className="container tusks-page__content">
        <div className="tusks-page__content-top">
          <h2 className="tusks-page__header">Ваши задачи</h2>
          <MyButton value="Добавить задачу" activeModal={setModalActive} />
        </div>
        <div className="tusks-page__search">
          <MyInput
            id="search-tusk"
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
        <DragDropContext onDragEnd={drugEnd}>
          <Dashboard tasksState={displayTasks} getTasks={state.getTasks} />
        </DragDropContext>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <AddTaskForm setModalActive={setModalActive} />
      </MyModal>
    </div>
  );
};

export default TusksPage;
