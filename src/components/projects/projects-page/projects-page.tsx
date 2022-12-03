import React from "react";
import Header from "../../header/header";
import MyButton from "../../UI/my-button/my-button";
import ProjectsList from "../projects-list/projects-list";
import "./projects-page.sass";

const ProjectsPage = () => {
  return (
    <div className="project-page">
      <Header />
      <div className="container project-page__content">
        <div className="project-page__content-top">
          <h2 className="project-page__header">Ваши проекты</h2>
          <div className="project-page__add-button">
            <MyButton value="Добавить проект"/>
          </div>
        </div>
        <div className="project-page__list">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
