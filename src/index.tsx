import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./components/app/App";
import { initializeApp } from "firebase/app";
import AuthService from "./services/authService";
import { GlobalServices } from "./types/global-services";
import { DbService } from "./services/dbService";
import { getFirestore } from "firebase/firestore";
import { Provider } from "react-redux";
import store from "./redux/store";
// import store from "./redux/store";

const app = initializeApp({
  apiKey: "AIzaSyBAIa8OG0eqbPGBNpEV0To4J538G2Ex7Go",
  authDomain: "task-manager-d9e1d.firebaseapp.com",
  projectId: "task-manager-d9e1d",
  storageBucket: "task-manager-d9e1d.appspot.com",
  messagingSenderId: "427055786718",
  appId: "1:427055786718:web:982f3b0fd08fabde9cb04f",
});

const authService = new AuthService();
const db = getFirestore(app);
export const dbService = new DbService(db);

export const ServicesContext = React.createContext<GlobalServices>({
  authService,
  dbService,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ServicesContext.Provider value={{ authService, dbService }}>
      <App />
    </ServicesContext.Provider>
  </Provider>
);
