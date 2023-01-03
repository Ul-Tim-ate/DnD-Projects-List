import { DashBoardHeaders } from "../dashboard";

export interface Task {
  id: string;
  header: string;
  description: string;
  dateStart: string;
  dateFinished: string;
  projectID: string;
  status: DashBoardHeaders;
}
