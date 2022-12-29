import React, { useState } from "react";
import Dashboard from "../../dashboard/dashboard-table/dashboard";
import Header from "../../header/header";
import MyButton from "../../UI/my-button/my-button";
import MyInput from "../../UI/my-input/my-input";
import MyModal from "../../UI/my-modal/my-modal";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./tusks-page.sass";
// import initialData from "../../../init-data";
import AddTaskForm from "../../forms/add-task-form/add-task-form";
import { useParams } from "react-router-dom";

const TusksPage = () => {
  const [modalActive, setModalActive] = useState(false);
  // const state = initialData;
  let { id } = useParams();
  
  const drugEnd = (result: DropResult) => {
    // console.log(result);
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
