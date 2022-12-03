import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./components/app/App";
import { initializeApp } from "firebase/app";
import AuthService from "./services/authService";
import { GlobalServices } from "./types/global-services";

const app = initializeApp({
  apiKey: "AIzaSyBAIa8OG0eqbPGBNpEV0To4J538G2Ex7Go",
  authDomain: "task-manager-d9e1d.firebaseapp.com",
  projectId: "task-manager-d9e1d",
  storageBucket: "task-manager-d9e1d.appspot.com",
  messagingSenderId: "427055786718",
  appId: "1:427055786718:web:982f3b0fd08fabde9cb04f",
});

const authService = new AuthService();
export const ServicesContext = React.createContext<GlobalServices>({
  authService,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ServicesContext.Provider value={{ authService }}>
      <App />
    </ServicesContext.Provider>
  </React.StrictMode>
);
