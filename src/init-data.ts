import { DashBoardHeaders } from "./types/dashboard";

const initialData = {
  tasks: [
    { id: "task-1", content: "Take out the garbage" },
    { id: "task-2", content: "Watch my favorite show" },
    { id: "task-3", content: "Charge my phone" },
    { id: "task-4", content: "Cook dinner" },
  ],
  columns: [
    {
      id: DashBoardHeaders.QUEUE,
      title: DashBoardHeaders.QUEUE,
      taskIds: ["task-1", "task-2"],
    },
    {
      id: DashBoardHeaders.DEVELOPMENT,
      title: DashBoardHeaders.DEVELOPMENT,
      taskIds: ["task-4"],
    },
    {
      id: DashBoardHeaders.DONE,
      title: DashBoardHeaders.DONE,
      taskIds: ["task-3"],
    },
  ],
  columnOrder: [
    DashBoardHeaders.QUEUE,
    DashBoardHeaders.DEVELOPMENT,
    DashBoardHeaders.DONE,
  ],
};

export default initialData;
