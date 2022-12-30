import { Firestore } from "firebase/firestore";
import AuthService from "./authService";

export class TusksService {
  db: Firestore;
  authService: AuthService;

  constructor(db: Firestore, authService: AuthService) {
    this.db = db;
    this.authService = authService;
  }

  createTusk = () => {};

  getTusks = () => {};

  deleteTusk = () => {};
}
