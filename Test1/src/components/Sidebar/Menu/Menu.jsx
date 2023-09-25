import React from "react";

const Menu = (props) => {
  return (
    <div className="sidebar__menus">
      {props.menuItems.map((menuItem, index) => (
        <div className="sidebar__menus__menu" key={index}>
          <div className="sidebar__menus__menu__icon">
            <ion-icon name={menuItem.iconName}></ion-icon>
          </div>
          <div className="sidebar__menus__menu__text">
            {menuItem.text === "My Task" ? (
              <p>
                {menuItem.text}
                <span className="sidebar__menus__menu__notification">4</span>
              </p>
            ) : (
              <p>{menuItem.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
