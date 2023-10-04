import React, { useState } from "react";
import Menu from "../Menu/Menu";
import Divider from "../Divider/Divider";

// Change your menu items here
const menuItems = [
  { iconName: "home-outline", text: "Home" },
  { iconName: "archive-outline", text: "My Task" },
  { iconName: "albums-outline", text: "Inbox" },
  { iconName: "analytics-outline", text: "Reporting" },
  { iconName: "clipboard-outline", text: "Portfolios" },
  { iconName: "flag-outline", text: "Goals" },
];

const Profile = (props) => {
  const { name, role, imgUrl } = props;

  const [profile, setProfile] = useState(false);

  const toggleContent = () => {
    setProfile(!profile);
  };

  return (
    <>
      <div className="sidebar__profile" onClick={() => toggleContent()}>
        <div className="sidebar__profile__img">
          <img src={imgUrl} alt="Profile Photo" />
        </div>
        <div className="sidebar__profile__info">
          <p className="sidebar__profile__info__name">{name}</p>
          <p className="sidebar__profile__info__role">{role}</p>
        </div>
        <div className="sidebar__profile__arrow">
          <ion-icon
            name={profile === true ? "chevron-down-outline" : "chevron-forward"}
          ></ion-icon>
        </div>
      </div>

      {profile === true ? (
        <>
          <Menu menuItems={menuItems} />
          <Divider />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
