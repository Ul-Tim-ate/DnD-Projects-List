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
import { BrowserRouter } from "react-router-dom";

const app = initializeApp({
  apiKey: "AIzaSyCMIp4qwrpAEKSAJ722R3vT7hqDR__nJ7Y",
  authDomain: "todo-list-dcd35.firebaseapp.com",
  projectId: "todo-list-dcd35",
  storageBucket: "todo-list-dcd35.appspot.com",
  messagingSenderId: "52696240656",
  appId: "1:52696240656:web:2cb0539a36a6369c51f095",
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
  <BrowserRouter>
    <Provider store={store}>
      <ServicesContext.Provider value={{ authService, dbService }}>
        <App />
      </ServicesContext.Provider>
    </Provider>
  </BrowserRouter>
);
