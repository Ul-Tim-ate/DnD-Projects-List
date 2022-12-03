import React, { useState } from "react";
import AddProjectForm from "../../forms/add-project-form/add-project-form";
import Header from "../../header/header";
import MyButton from "../../UI/my-button/my-button";
import MyModal from "../../UI/my-modal/my-modal";
import ProjectsList from "../projects-list/projects-list";
import "./projects-page.sass";

const ProjectsPage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="project-page">
      <Header />
      <div className="container project-page__content">
        <div className="project-page__content-top">
          <h2 className="project-page__header">Ваши проекты</h2>
          <div className="project-page__add-button">
            <MyButton value="Добавить проект" activeModal={setModalActive} />
          </div>
        </div>
        <div className="project-page__list">
          <ProjectsList />
        </div>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <AddProjectForm setModalActive={setModalActive} />
      </MyModal>
    </div>
  );
};

export default ProjectsPage;
