import { Firestore } from "firebase/firestore";
import AuthService from "./authService";
import { ProjectService } from "./projectsService";
import { TusksService } from "./tusksService";

export class DbService {
  authService: AuthService;
  projectService: ProjectService;
  tusksService: TusksService;

  constructor(db: Firestore) {
    this.authService = new AuthService();
    this.projectService = new ProjectService(db, this.authService);
    this.tusksService = new TusksService(db, this.authService);
  }

  getAllUserProjects = async () => {
    return await this.projectService.getAllUserProjects();
  };
  createProject = async (name: string) => {
    return await this.projectService.createProject(name);
  };
}
