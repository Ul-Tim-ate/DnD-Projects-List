import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ServicesContext } from "../..";
import { createSetUserAction } from "../../redux/actions/userActionCreator";
import Auth from "../auth/auth";
import ProjectsPage from "../projects/projects-page/projects-page";
import TusksPage from "../tusks/tusks-page/tusks-page";
import "./App.sass";
import "./rezet.sass";

function App() {
  const { authService } = useContext(ServicesContext);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  onAuthStateChanged(authService.getUserAuth(), (userAuth) => {
    if (userAuth) {
      if (user !== userAuth.uid) {
        setUser(userAuth.uid);
        dispatch(createSetUserAction({ id: userAuth.uid }));
        navigate("/projects");
      }
    }
  });
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Auth user={user} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<TusksPage />} />
      </Routes>
    </div>
  );
}

export default App;
