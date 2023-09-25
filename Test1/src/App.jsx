import React from "react";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <Project />
      </div>
    </>
  );
}

export default App;
