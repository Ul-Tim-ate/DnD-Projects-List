import { DashBoardHeaders } from "../dashboard";

export interface Task {
  header: string;
  description: string;
  dateStart: string;
  dateFinished: string;
  projectID: string;
  status: DashBoardHeaders;
  userId: string;
}
