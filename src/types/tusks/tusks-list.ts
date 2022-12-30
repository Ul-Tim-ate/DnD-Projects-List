import { DashBoardHeaders } from "../dashboard";
import { Tusk } from "./tusk";

export interface TusksList {
  tusks: Tusk[];
  header: DashBoardHeaders;
}