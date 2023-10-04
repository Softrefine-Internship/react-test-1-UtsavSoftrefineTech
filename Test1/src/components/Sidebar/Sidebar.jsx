import React from "react";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";
import Divider from "./Divider/Divider";
import Footer from "./Footer/Footer";

// Change your profile image url here
const profileUrl =
  "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg";

// Change your project data here
const projectData = [
  {
    title: "Mercedes project",
    images: [
      "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    types: [
      { name: "Landing page", color: "#91979D", icon: "" },
      { name: "Vehicle", color: "#91979D", icon: "star" },
      { name: "Art & Culture", color: "#F3BB1C", icon: "lock-closed" },
      { name: "Login/logout", color: "#F3BB1C", icon: "" },
      { name: "Sustainability", color: "#B57BFF", icon: "" },
      { name: "Innovation", color: "#9FB3FD", icon: "" },
    ],
  },
  {
    title: "Amazon project",
    images: [
      "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    types: [
      { name: "Landing page", color: "#91979D", icon: "" },
      { name: "Vehicle", color: "#91979D", icon: "star" },
      { name: "Art & Culture", color: "#F3BB1C", icon: "lock-closed" },
      { name: "Login/logout", color: "#F3BB1C", icon: "" },
      { name: "Sustainability", color: "#B57BFF", icon: "" },
      { name: "Innovation", color: "#9FB3FD", icon: "" },
    ],
  },
  {
    title: "Tesla project",
    images: [
      "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    types: [
      { name: "Landing page", color: "#91979D", icon: "" },
      { name: "Vehicle", color: "#91979D", icon: "star" },
      { name: "Art & Culture", color: "#F3BB1C", icon: "lock-closed" },
      { name: "Login/logout", color: "#F3BB1C", icon: "" },
      { name: "Sustainability", color: "#B57BFF", icon: "" },
      { name: "Innovation", color: "#9FB3FD", icon: "" },
    ],
  },
  {
    title: "Google project",
    images: [
      "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    types: [
      { name: "Landing page", color: "#91979D", icon: "" },
      { name: "Vehicle", color: "#91979D", icon: "star" },
      { name: "Art & Culture", color: "#F3BB1C", icon: "lock-closed" },
      { name: "Login/logout", color: "#F3BB1C", icon: "" },
      { name: "Sustainability", color: "#B57BFF", icon: "" },
      { name: "Innovation", color: "#9FB3FD", icon: "" },
    ],
  },
];

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Logo />
          <div className="sidebar__header__close-icon" onClick={toggleSidebar}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        <div className="sidebar__scroll">
          <Profile
            name="Hatypo Projects"
            role="11 members"
            imgUrl={profileUrl}
          />
          <Project projectData={projectData} />
          <Divider />
          <Footer text="Favorites" icon="star" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
