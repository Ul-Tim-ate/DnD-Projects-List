import React, { useState } from "react";
import Dashboard from "../../dashboard/dashboard-table/dashboard";
import Header from "../../header/header";
import MyButton from "../../UI/my-button/my-button";
import MyInput from "../../UI/my-input/my-input";
import MyModal from "../../UI/my-modal/my-modal";
import "./tusks-page.sass";

const TusksPage = () => {
  const [modalActive, setModalActive] = useState(false);
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
        <Dashboard/>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        Модальное окно
      </MyModal>
    </div>
  );
};

export default TusksPage;
