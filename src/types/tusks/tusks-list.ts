import { DashBoardHeaders } from "../dashboard";
import { Task } from "./task";

export interface TasksList {
  tasks: Task[];
  header: DashBoardHeaders;
}