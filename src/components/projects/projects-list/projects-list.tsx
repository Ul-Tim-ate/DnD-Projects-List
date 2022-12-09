import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ProjectsState } from "../../../types/project-redux/project-state";
import { UserProject } from "../../../types/user-project";
import { getUserProjectsAction } from "../../../redux/actions/projectActionCreator";
import MySpinner from "../../UI/my-spinner/my-spinner";
import ProjectsItem from "../projects-item/projects-item";
import "./projects-list.sass";
import User from "../../../types/user-redux/user";

const ProjectsList = () => {
  const [loading, setLoading] = useState(true);
  const { projects }: { projects: ProjectsState[] } = useTypedSelector(
    (state) => state.projecter
  );
  const [projectsList, setProjectsList] = useState<UserProject[]>(projects);
  const { user }: { user: User } = useTypedSelector((state) => state.user);

  if (JSON.stringify(projectsList) !== JSON.stringify(projects)) {
    setProjectsList(projects);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    if (user.id) {
      dispatch(getUserProjectsAction());
      setLoading(false);
    }
  }, [projectsList, user]);

  if (loading) {
    return <MySpinner />;
  }
  
  if (!projectsList.length) {
    return <div className="">У вас ещё нет никаких проектов</div>;
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
