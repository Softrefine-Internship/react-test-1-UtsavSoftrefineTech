import React from "react";
import Card from "./Card/Card";

const Section = (props) => {
  const { info } = props; // Destructure the imageSrc from props
  return (
    <>
      <div className="project__content">
        {info.map((info, index) => (
          <div key={index} className="project__content__items">
            <div className="project__content__heading">
              <div
                className="project__content__heading__btns"
                style={{ backgroundColor: info.color }}
              ></div>
              <div className="project__content__heading__title">
                <p>{info.title}</p>
              </div>
              {info.title == "Done" ? (
                <div></div>
              ) : (
                <div className="project__content__heading__sidebtns">
                  <ion-icon name="add-outline"></ion-icon>
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
              )}
            </div>
            <Card cardData={info.cardData} infoTitle={info.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
