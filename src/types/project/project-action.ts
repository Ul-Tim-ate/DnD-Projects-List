export interface ProjectActionType {
  type: string;
  payload: string;
}

export interface ProjectSuccessCreatedActionType {
  type: string;
  payload: { projectID: string; projectName: string };
}
