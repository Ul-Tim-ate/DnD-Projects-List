import { ProjectActionTypes } from "../../../types/project-redux/project-action-types";

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
