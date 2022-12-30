import { ProjectActionTypes } from "../../types/project/project-action-types";
import { UserProject } from "../../types/user-project";

export const createProjectAction = (projectName: string) => {
  return {
    type: ProjectActionTypes.CREATE_PROJECT,
    payload: projectName,
  };
};

export const projectCreateSuccess = (
  projectName: string,
  projectID: string
) => {
  return {
    type: ProjectActionTypes.PROJECT_SUCCESSFUL_CREATED,
    payload: { projectName: projectName, projectID: projectID },
  };
};

export const getUserProjectsAction = () => {
  return {
    type: ProjectActionTypes.FETCH_USER_PROJECTS,
  };
};

export const setUserProjectsAction = (projects: UserProject[]) => {
  return {
    type: ProjectActionTypes.SET_USER_PROJECTS,
    payload: projects,
  };
};
