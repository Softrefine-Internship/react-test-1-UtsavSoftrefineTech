import React from "react";

// Cnange the tabs array to include the new tab
const tabs = [
  "Overview",
  "List",
  "Board",
  "Timeline",
  "Calendar",
  "Workflow",
  "Dashboard",
  "More..",
];

const Options = (props) => {
  return (
    <>
      <div className="project__options">
        <ul className="project__options__items">
          {tabs.map((text, index) => (
            <li key={index}>
              <button className="project__options__items__tablink">
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Options;
