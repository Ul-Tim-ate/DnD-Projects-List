import { ProjectSuccessCreatedActionType } from "../../../types/project-redux/project-action";
import { ProjectActionTypes } from "../../../types/project-redux/project-action-types";
import { ProjectsState } from "../../../types/project-redux/project-state";

const initialState: ProjectsState[] = [];

const projects = (
  state = initialState,
  { type, payload }: ProjectSuccessCreatedActionType
): ProjectsState[] => {
  switch (type) {
    case ProjectActionTypes.PROJECT_SUCCESSFUL_CREATED:
      return [...state, { ...payload }];
    default:
      return state;
  }
};

export default projects;
