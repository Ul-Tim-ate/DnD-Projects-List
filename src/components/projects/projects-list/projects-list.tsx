import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ProjectsState } from "../../../types/project/project-state";
import { UserProject } from "../../../types/user-project";
import { getUserProjectsAction } from "../../../redux/actions/projectActionCreator";
import MySpinner from "../../UI/my-spinner/my-spinner";
import ProjectsItem from "../projects-item/projects-item";
import "./projects-list.sass";
import User from "../../../types/user/user";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  const [loading, setLoading] = useState(true);
  const { projects }: { projects: ProjectsState[] } = useTypedSelector(
    (state) => state.projecter
  );
  const { isGetProjects }: { isGetProjects: boolean } = useTypedSelector(
    (state) => state.projecter
  );
  const [projectsList, setProjectsList] = useState<UserProject[]>(projects);
  const { id }: { id: string } = useTypedSelector((state) => state.user);
  if (JSON.stringify(projectsList) !== JSON.stringify(projects)) {
    setProjectsList(projects);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    if (id) {
      dispatch(getUserProjectsAction());
      if (isGetProjects) {
        setLoading(false);
      }
    }
  }, [projectsList, id, isGetProjects]);

  if (loading) {
    return (
      <div className="projects-list__spinner">
        <MySpinner />
      </div>
    );
  }

  if (isGetProjects && !projects.length) {
    return <div className="">У вас ещё нет никаких проектов</div>;
  }

  return (
    <ul className="projects-list">
      {projects.map((project) => {
        return (
          <Link
            to={`/projects/${project.projectID}`}
            key={project.projectID}
            className="projects-list__link"
          >
            <ProjectsItem {...project} />
          </Link>
        );
      })}
    </ul>
  );
};

export default ProjectsList;
