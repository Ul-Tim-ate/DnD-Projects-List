import React, { FC } from "react";
import "./projects-item.sass";

interface ProjectsItemProps {
  projectName: string;
  projectID: string;
}

const ProjectsItem: FC<ProjectsItemProps> = ({ projectName, projectID }) => {
  return (
    <li className="projects-item">
      <span className="projects-item__text">{projectName}</span>
    </li>
  );
};

export default ProjectsItem;
