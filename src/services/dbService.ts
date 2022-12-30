import { Firestore } from "firebase/firestore";
import AuthService from "./authService";
import { ProjectService } from "./projectsService";

export class DbService {
  db: Firestore;
  authService: AuthService;
  projectService: ProjectService;

  constructor(db: Firestore) {
    this.db = db;
    this.authService = new AuthService();
    this.projectService = new ProjectService(db, this.authService);
  }

  getAllUserProjects = async () => {
    return await this.projectService.getAllUserProjects();
  };
  createProject = async (name: string) => {
    return await this.projectService.createProject(name);
  };
}
