import dayjs from "dayjs";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { DashBoardHeaders } from "../types/dashboard";
import { Task } from "../types/tusks/task";
import AuthService from "./authService";

export class TasksService {
  db: Firestore;
  authService: AuthService;

  constructor(db: Firestore, authService: AuthService) {
    this.db = db;
    this.authService = authService;
  }

  createTusk = async (task: Task) => {
    const docRef = await addDoc(collection(this.db, "tasks"), {
      // numberOfTask: number;
      header: task.header,
      description: task.description,
      dateStart: task.dateStart,
      dateFinished: task.dateFinished,
      projectID: task.projectID,
      status: DashBoardHeaders.QUEUE,
      userId: this.authService.getUserAuth().currentUser?.uid,
      // createTime: dayjs().toString(),
    });
    const newTask = { taskID: docRef.id, taskName: task.header };
    return newTask;
  };

  getTusks = () => {};

  deleteTusk = () => {};
}
