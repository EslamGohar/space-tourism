import { useState } from "react";
import { SingleTechnology } from "../components";
import data from "../data.json";
import "../styles/technology.scss";

const Technology = () => {
  const techArr = data.technology;
  const [currentTech, setCurrentTech] = useState(techArr[0]);

  const changeTechnology = (techId) => {
    techArr.forEach((tech) => {
      if (tech.id === techId) setCurrentTech(tech);
    });
  };

  return (
    <div className="technology-page">
      <h2 className="tech-heading">
        <span>03</span> Space launch 101
      </h2>
      <div className="technologies">
        <div className="choose-technology-btns">
          <button
            className={
              currentTech.id === "0"
                ? "change-technology-btn active-tech-btn"
                : "change-technology-btn"
            }
            onClick={() => changeTechnology("0")}
          >
            1
          </button>
          <button
            className={
              currentTech.id === "1"
                ? "change-technology-btn active-tech-btn"
                : "change-technology-btn"
            }
            onClick={() => changeTechnology("1")}
          >
            2
          </button>
          <button
            className={
              currentTech.id === "2"
                ? "change-technology-btn active-tech-btn"
                : "change-technology-btn"
            }
            onClick={() => changeTechnology("2")}
          >
            3
          </button>
        </div>
        <SingleTechnology {...currentTech} />
      </div>
    </div>
  );
};

export default Technology;
