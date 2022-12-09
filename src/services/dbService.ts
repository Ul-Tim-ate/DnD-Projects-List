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
      const { name } = doc.data();
      const project: UserProject = { projectName: name, projectID: doc.id };
      userProjects.push(project);
    });
    return userProjects;
  };

  createProject = async (name: string) => {
    const docRef = await addDoc(collection(this.db, "projects"), {
      name: name,
      userId: this.authService.getUserAuth().currentUser?.uid,
    });
    const newProject = { projectID: docRef.id, projectName: name };
    return newProject;
  };
}
