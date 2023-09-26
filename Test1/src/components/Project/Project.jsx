import React from "react";
import Header from "./Header/Header";
import Heading from "./Heading/Heading";
import Options from "./Options/Options";
import Section from "./Content/Section/Section";

// Change the info array to include the new tab
const info = [
  {
    title: "New request",
    color: "red",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#EBD18F",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        imageSrc: "https://wallpapercave.com/wp/wp6112875.jpg",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "In progress",
    color: "blue",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#EBD18F",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "21 May, 2023 - 26 May, 2023",
        imageSrc: "https://wallpapercave.com/wp/wp6112875.jpg",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "Needs review",
    color: "yellow",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        imageSrc: "https://wallpapercave.com/wp/wp6112875.jpg",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#EBD18F",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "Done",
    color: "green",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#EBD18F",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg: "https://wallpapercave.com/wp/wp6112875.jpg",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
];

const Project = () => {
  return (
    <>
      <div className="project">
        <Header />
        <Heading />
        <Options />
        <Section info={info} />
      </div>
    </>
  );
};

export default Project;
