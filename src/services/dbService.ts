import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  getDocs,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import AuthService from "./authService";

export class DbService {
  db: Firestore;
  authService: AuthService;

  constructor(db: Firestore) {
    this.db = db;
    this.authService = new AuthService();
  }

  getAllUserProjects = async () => {
    const projects = await getDocs(collection(this.db, "projects"));
    return projects;
  };

  createProject = async (name: string) => {
    console.log(name);
    
    const docRef = await addDoc(collection(this.db, "projects"), {
      name: name,
      userId: this.authService.getUserAuth().currentUser?.uid,
    });
    const newProject = { projectID: docRef.id, projectName: name };
    return newProject;
  };
}
