import React, { useEffect, useState } from "react";
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
} from "../../../redux/actions/tusksActionCreater";

const TusksPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const state = useTypedSelector((state) => state.tusker);
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
    let startIndex: number = -1;
    let finishIndex: number = -1;

    const start = state.columns.find((el, index) => {
      startIndex = index;
      return el.id === source.droppableId;
    });
    const finish = state.columns.find((el, index) => {
      finishIndex = index;
      return el.id === destination.droppableId;
    });

    if (!start || !finish) {
      return;
    }

    if (start === finish) {
      const newTasksIds = start.taskIds;
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);
      const newState = state;
      newState.columns[startIndex].taskIds = newTasksIds;
      dispatch(setTusksAction(newState));
      return;
    }
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState = state;
    newState.columns[startIndex] = newStart;
    newState.columns[finishIndex] = newFinish;
    dispatch(setTusksAction(newState));
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
          <MyInput id="search-tusk" />
        </div>
        <DragDropContext onDragEnd={drugEnd}>
          <Dashboard />
        </DragDropContext>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <AddTaskForm setModalActive={setModalActive} />
      </MyModal>
    </div>
  );
};

export default TusksPage;
