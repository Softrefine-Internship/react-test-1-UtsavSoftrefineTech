import React from "react";
import Time from "./Time/Time";
import FeatureList from "./FeatureList/FeatureList";

const featureItems = [
  { iconName: "bookmarks-outline", text: "All Task" },
  { iconName: "filter-outline", text: "Filter" },
  { iconName: "chevron-expand-outline", text: "Sort: Priority" },
  { iconName: "link-outline", text: "Public link: off" },
  { iconName: "pencil-outline", text: "Customize" },
];

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="project__heading">
          <Time />
          <FeatureList featureItems={featureItems} />
        </div>
      </div>
    </>
  );
};

export default Project;
