import React from "react";

const Profile = (props) => {
  const { name, role, imgUrl } = props;
  return (
    <>
      <div className="sidebar__profile">
        <div className="sidebar__profile__img">
          <img src={imgUrl} alt="Profile Photo" />
        </div>
        <div className="sidebar__profile__info">
          <p className="sidebar__profile__info__name">{name}</p>
          <p className="sidebar__profile__info__role">{role}</p>
        </div>
        <div className="sidebar__profile__arrow">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Profile;
