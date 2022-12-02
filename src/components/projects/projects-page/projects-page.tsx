import React from "react";
import Header from "../../header/header";
import ProjectsList from "../projects-list/projects-list";
import "./projects-page.sass";

const ProjectsPage = () => {
  return (
    <div className="project-page">
      <Header/>
      <h2 className="project-page__header">Projects</h2>
      <div className="project-page__list">
        <ProjectsList />
      </div>
    </div>
  );
};

export default ProjectsPage;
