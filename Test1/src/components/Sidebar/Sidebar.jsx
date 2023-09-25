import React from "react";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Menu from "./Menu/Menu";
import Project from "./Project/Project";
import Divider from "./Divider/Divider";
import Footer from "./Footer/Footer";

// Change your profile image url here
const profileUrl =
  "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg";

// Change your menu items here
const menuItems = [
  { iconName: "home-outline", text: "Home" },
  { iconName: "archive-outline", text: "My Task" },
  { iconName: "albums-outline", text: "Inbox" },
  { iconName: "analytics-outline", text: "Reporting" },
  { iconName: "clipboard-outline", text: "Portfolios" },
  { iconName: "flag-outline", text: "Goals" },
];

// Change your project data here
const projectData = [
  {
    title: "Mercedes project",
    images: [
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    types: [
      { name: "Landing page", color: "#6f6f6f", icon: "" },
      { name: "Vehicle", color: "#6f6f6f", icon: "star" },
      { name: "Art & Culture", color: "#F5A623", icon: "lock-closed" },
      { name: "Login/logout", color: "#F5A623", icon: "" },
      { name: "Sustainability", color: "#9B51E0", icon: "" },
      { name: "Innovation", color: "#4A90E2", icon: "" },
    ],
  },
  {
    title: "Amazon project",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
    ],
    types: [
      { name: "Landing page", color: "#6f6f6f", icon: "" },
      { name: "Vehicle", color: "#6f6f6f", icon: "star" },
      { name: "Art & Culture", color: "#F5A623", icon: "lock-closed" },
      { name: "Login/logout", color: "#F5A623", icon: "" },
      { name: "Sustainability", color: "#9B51E0", icon: "" },
      { name: "Innovation", color: "#4A90E2", icon: "" },
    ],
  },
  {
    title: "Tesla project",
    images: [
      "https://wallpapercave.com/wp/wp6112875.jpg",
      "https://wallpapercave.com/wp/wp6112875.jpg",
      "https://wallpapercave.com/wp/wp6112875.jpg",
      "https://wallpapercave.com/wp/wp6112875.jpg",
      "https://wallpapercave.com/wp/wp6112875.jpg",
      "https://wallpapercave.com/wp/wp6112875.jpg",
    ],
    types: [
      { name: "Landing page", color: "#6f6f6f", icon: "" },
      { name: "Vehicle", color: "#6f6f6f", icon: "star" },
      { name: "Art & Culture", color: "#F5A623", icon: "lock-closed" },
      { name: "Login/logout", color: "#F5A623", icon: "" },
      { name: "Sustainability", color: "#9B51E0", icon: "" },
      { name: "Innovation", color: "#4A90E2", icon: "" },
    ],
  },
  {
    title: "Google project",
    images: [
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
      "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
    ],
    types: [
      { name: "Landing page", color: "#6f6f6f", icon: "" },
      { name: "Vehicle", color: "#6f6f6f", icon: "star" },
      { name: "Art & Culture", color: "#F5A623", icon: "lock-closed" },
      { name: "Login/logout", color: "#F5A623", icon: "" },
      { name: "Sustainability", color: "#9B51E0", icon: "" },
      { name: "Innovation", color: "#4A90E2", icon: "" },
    ],
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Logo />
        <Profile name="Hatypo Projects" role="11 members" imgUrl={profileUrl} />
        <Menu menuItems={menuItems} />
        <Divider />
        <Project projectData={projectData} />
        <Divider />
        <Footer text="Favorites" icon="star" />
      </div>
    </>
  );
};

export default Sidebar;
