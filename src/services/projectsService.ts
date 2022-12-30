import dayjs from "dayjs";
import {
  query,
  collection,
  where,
  getDocs,
  addDoc,
  Firestore,
} from "firebase/firestore";
import { UserProject } from "../types/user-project";
import AuthService from "./authService";

export class ProjectService {
  db: Firestore;
  authService: AuthService;

  constructor(db: Firestore, authService: AuthService) {
    this.db = db;
    this.authService = authService;
  }

  sortProjectsByTime = (userProjects: UserProject[]) => {
    return userProjects.sort((a, b) => {
      const firstProject = dayjs(a.createTime);
      const secondProject = dayjs(b.createTime);
      return firstProject.isAfter(secondProject) ? 1 : -1;
    });
  };
  getAllUserProjects = async () => {
    if (!this.authService.getUserAuth().currentUser) {
      return [];
    }
    const projects = query(
      collection(this.db, "projects"),
      where("userId", "==", this.authService.getUserAuth().currentUser?.uid)
    );
    const querySnapshot = await getDocs(projects);
    let userProjects: UserProject[] = [];
    querySnapshot.forEach((doc) => {
      const { name, createTime } = doc.data();
      const project: UserProject = {
        projectName: name,
        projectID: doc.id,
        createTime,
      };
      userProjects.push(project);
    });
    return this.sortProjectsByTime(userProjects);
  };
  createProject = async (name: string) => {
    const docRef = await addDoc(collection(this.db, "projects"), {
      name: name,
      userId: this.authService.getUserAuth().currentUser?.uid,
      createTime: dayjs().toString(),
    });
    const newProject = { projectID: docRef.id, projectName: name };
    return newProject;
  };
}
