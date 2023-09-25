import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="sidebar__footer">
        <div className="sidebar__footer__icon">
          <ion-icon name={props.icon}></ion-icon>
        </div>
        <div className="sidebar__footer__text">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
