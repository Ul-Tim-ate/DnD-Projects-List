import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ProjectsState } from "../../../types/project-redux/project-state";
import { getUserProjectsAction } from "../../redux/actions/projectActionCreator";
import ProjectsItem from "../projects-item/projects-item";
import "./projects-list.sass";

const ProjectsList = () => {
  const [projectList, setProjectList] = useState<string[]>([]);
  const { projects }: { projects: ProjectsState[] } = useTypedSelector(
    (state) => state.projecter
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProjectsAction());
  }, []);
  return (
    <ul className="projects-list">
      {projects.map((project) => {
        return <ProjectsItem {...project} key={project.projectID} />;
      })}
    </ul>
  );
};

export default ProjectsList;
