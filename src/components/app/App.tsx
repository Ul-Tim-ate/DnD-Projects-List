import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState } from "react";
import { ServicesContext } from "../..";
import Auth from "../auth/auth";
import ProjectsPage from "../projects/projects-page/projects-page";
import MySpinner from "../UI/my-spinner/my-spinner";
import "./App.sass";
import "./rezet.sass";

function App() {
  const { authService } = useContext(ServicesContext);
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  onAuthStateChanged(authService.getUserAuth(), (user) => {
    if (user) {
      setUser(user.uid);
      setIsLoading(false);
    } else {
      setUser("");
      setIsLoading(false);
    }
  });
  if (isLoading) {
    return (
      <div className="app__loading">
        <MySpinner />
      </div>
    );
  }
  return <div className="app">{user ? <ProjectsPage /> : <Auth />}</div>;
}

export default App;
