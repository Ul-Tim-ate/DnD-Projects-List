import React from "react";
import Auth from "../auth/auth";
import ProjectsPage from "../projects/projects-page/projects-page";
import "./App.sass";
import "./rezet.sass";

function App() {
  return (
    <div className="app">
      <Auth/>
      {/* <ProjectsPage/> */}
    </div>
  );
}

export default App;
