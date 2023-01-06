import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { TusksState } from "../redux/reducers/tusks";
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
      header: task.header,
      description: task.description,
      dateStart: task.dateStart,
      dateFinished: task.dateFinished,
      projectID: task.projectID,
      status: task.status,
      userId: this.authService.getUserAuth().currentUser?.uid,
    });
    const newTask = { taskID: docRef.id, task: task };
    return newTask;
  };
  getTusks = async (projectId: string) => {
    if (!this.authService.getUserAuth().currentUser) {
      return [];
    }
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
        id: doc.id,
      };
      tasks.push(projectTask);
    });
    return tasks;
  };
  changeTaskStatus = async (taskId: string, status: string) => {
    const taskRef = doc(this.db, "tasks", taskId);
    await updateDoc(taskRef, {
      status: status,
    });
  };
  deleteTusk = () => {};
  getTaskByName = (name: string, tusksState: TusksState) => {
    const displayTasks = tusksState.tasks.filter((task) => {
      return task.header.toLowerCase().includes(name.toLowerCase());
    });
    const columns = tusksState.columns.map((column) => {
      const newColumn = column.taskIds.filter((id) => {
        let flag = false;
        displayTasks.forEach((task) => {
          if (id === task.id) {
            flag = true;
          }
        });
        return flag;
      });
      return { ...column, taskIds: newColumn };
    });
    tusksState.columns = columns;
    return tusksState;
  };
}
