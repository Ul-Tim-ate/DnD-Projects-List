import { ProjectSuccessCreatedActionType } from "../../types/project/project-action";
import { ProjectActionTypes } from "../../types/project/project-action-types";
import { ProjectsState } from "../../types/project/project-state";

const a: ProjectsState[] = [];

const initialState = {
  projects: a,
  isGetProjects: false,
};

const projects = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ProjectActionTypes.PROJECT_SUCCESSFUL_CREATED:
      return {
        ...state,
        projects: [
          ...state.projects,
          { projectName: payload.projectName, projectID: payload.projectID },
        ],
      };
    case ProjectActionTypes.SET_USER_PROJECTS:
      return { ...state, projects: payload, isGetProjects: true };
    default:
      return state;
  }
};

export default projects;
