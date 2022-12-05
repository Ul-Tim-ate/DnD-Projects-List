import { ProjectSuccessCreatedActionType } from "../../../types/project-redux/project-action";
import { ProjectActionTypes } from "../../../types/project-redux/project-action-types";
import { ProjectsState } from "../../../types/project-redux/project-state";

const a: ProjectsState[] = [];

const initialState = {
  projects: a,
};

const projects = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case ProjectActionTypes.PROJECT_SUCCESSFUL_CREATED:
      return state;
    case ProjectActionTypes.SET_USER_PROJECTS:
      return {...state, projects: payload}
    default:
      return state;
  }
};

export default projects;
