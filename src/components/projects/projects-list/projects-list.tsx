import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ProjectsState } from "../../../types/project-redux/project-state";
import { UserProject } from "../../../types/user-project";
import { getUserProjectsAction } from "../../../redux/actions/projectActionCreator";
import MySpinner from "../../UI/my-spinner/my-spinner";
import ProjectsItem from "../projects-item/projects-item";
import "./projects-list.sass";

const ProjectsList = () => {
  const [loading, setLoading] = useState(true);
  const { projects }: { projects: ProjectsState[] } = useTypedSelector(
    (state) => state.projecter
  );
  const [projectsList, setProjectsList] = useState<UserProject[]>(projects);

  if (JSON.stringify(projectsList) != JSON.stringify(projects)) {
    setProjectsList(projects);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getUserProjectsAction());
    setLoading(false);
  }, [projectsList]);

  if (loading) {
    return <MySpinner />;
  }

  return (
    <ul className="projects-list">
      {projects.map((project) => {
        return <ProjectsItem {...project} key={project.projectID} />;
      })}
    </ul>
  );
};

export default ProjectsList;
