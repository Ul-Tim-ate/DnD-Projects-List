import { DashBoardHeaders } from "../dashboard";

export interface Tusk {
  number: number;
  header: string;
  description: string;
  dateStart: Date;
  dateFinished: Date;
  priority: number;
  projectID: string;
  status: DashBoardHeaders;
}