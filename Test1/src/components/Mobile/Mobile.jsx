import React, { useState, useEffect, useRef } from "react";
import Logo from "../Sidebar/Logo/Logo";
import IconBtn from "../Header/IconBtn/IconBtn";
import PersonAvatar from "../Header/PersonAvatar/PersonAvatar";
import ProfileDetails from "../Header/ProfileDetails/ProfileDetails";
import SideButton from "./SideButton/SideButton";
import Date from "../Header/Date/Date";
import Search from "../Header/Search/Search";
import Project from "../Project/Project";
import Sidebar from "../Sidebar/Sidebar"; // Import your Sidebar component

const profileImg = "https://wallpapercave.com/wp/wp6112875.jpg";

const MobileHeader = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
      // Click occurred outside the sidebar
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isSidebarVisible ? (
        <div ref={sidebarRef}>
          <Sidebar />
        </div>
      ) : (
        <>
          <div className="mobile__header">
            <div className="header">
              <SideButton toggleSidebar={toggleSidebar} />
              <Logo />
              <IconBtn icon="settings-outline" />
              <IconBtn icon="notifications-outline" />
              <PersonAvatar img={profileImg} />
              <ProfileDetails name="Zhofran ardyan" />
            </div>
          </div>
          <div className="mobile__heading">
            <Date date="Thursday, 18 May 2023" />
            <Search />
          </div>
          <div className="mobile__main">
            <Project />
          </div>
        </>
      )}
    </>
  );
};

export default MobileHeader;
