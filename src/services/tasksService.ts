import dayjs from "dayjs";
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
    });
    const newTask = { taskID: docRef.id, taskName: task.header };
    return newTask;
  };

  getTusks = async (projectId: string) => {
    if (!this.authService.getUserAuth().currentUser) {
      return [];
    }
    console.log(projectId,"taskserv");
    
    const projects = query(
      collection(this.db, "tasks"),
      where("projectID", "==", projectId)
    );
    const querySnapshot = await getDocs(projects);
    let tasks: Task[] = [];
    querySnapshot.forEach((doc) => {
      const {
        header,
        description,
        dateStart,
        dateFinished,
        projectID,
        status,
      } = doc.data();
      const projectTask: Task = {
        header,
        description,
        dateStart,
        dateFinished,
        projectID,
        status,
      };
      tasks.push(projectTask);
    });
    console.log(tasks);
    return tasks;
  };

  deleteTusk = () => {};
}
