import { Firestore } from "firebase/firestore";
import { Task } from "../types/tusks/task";
import AuthService from "./authService";
import { ProjectService } from "./projectsService";
import { TasksService } from "./tasksService";

export class DbService {
  authService: AuthService;
  projectService: ProjectService;
  tusksService: TasksService;

  constructor(db: Firestore) {
    this.authService = new AuthService();
    this.projectService = new ProjectService(db, this.authService);
    this.tusksService = new TasksService(db, this.authService);
  }

  getAllUserProjects = async () => {
    return await this.projectService.getAllUserProjects();
  };
  createProject = async (name: string) => {
    return await this.projectService.createProject(name);
  };

  createTask = async (task: Task) => {
    return await this.tusksService.createTusk(task);
  };
}
