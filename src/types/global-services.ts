import AuthService from "../services/authService";
import { DbService } from "../services/dbService";

export interface GlobalServices{
  authService: AuthService
  dbService: DbService
}