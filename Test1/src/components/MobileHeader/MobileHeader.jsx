import React from "react";
import Logo from "../Sidebar/Logo/Logo";
import IconBtn from "../Header/IconBtn/IconBtn";
import PersonAvatar from "../Header/PersonAvatar/PersonAvatar";
import ProfileDetails from "../Header/ProfileDetails/ProfileDetails";
import SideButton from "./SideButton/SideButton";

const profileImg = "https://wallpapercave.com/wp/wp6112875.jpg";

const MobileHeader = () => {
  return (
    <>
      <div className="mobile__header">
        <SideButton />
        <Logo />
        <IconBtn icon="settings-outline" />
        <IconBtn icon="notifications-outline" />
        <PersonAvatar img={profileImg} />
        <ProfileDetails name="Zhofran ardyan" />
      </div>
    </>
  );
};

export default MobileHeader;
