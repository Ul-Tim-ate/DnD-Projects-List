import dayjs from "dayjs";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserProject } from "../types/user-project";
import AuthService from "./authService";

export class DbService {
  db: Firestore;
  authService: AuthService;

  constructor(db: Firestore) {
    this.db = db;
    this.authService = new AuthService();
  }

  sortProjectsByTime = (userProjects: UserProject[]) => {
    return userProjects.sort((a, b) => {
      const firstProject = dayjs(a.createTime);
      const secondProject = dayjs(b.createTime);
      return firstProject.isAfter(secondProject) ? 1 : -1;
    });
  };

  // a.createTime > b.createTime ? 1 : -1

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
