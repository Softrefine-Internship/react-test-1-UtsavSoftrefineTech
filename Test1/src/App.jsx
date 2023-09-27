import React from "react";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MobileHeader from "./components/MobileHeader/MobileHeader";

function App() {
  return (
    <>
      <div className="desktop-view">
        <div className="container">
          <Sidebar />
          <Header />
          <Project />
        </div>
      </div>
      <div className="mobile-view">
        <MobileHeader />
      </div>
    </>
  );
}

export default App;
