import React, { useState } from "react";
import data from "../data.json";
import { SingleDestination } from "../components";
import "../styles/destination.scss";

const Destination = () => {
  const destinationsArr = data.destinations;

  const [currentDestination, setCurrentDestination] = useState(
    destinationsArr[0]
  );

  const changeDestination = (destinationId) => {
    destinationsArr.forEach((dest) => {
      if (dest.id === destinationId) {
        setCurrentDestination(dest);
      }
    });
  };

  return (
    <div className="destination-page">
      <h2>
        <span>01</span> Pick your description
      </h2>
      <div className="destination-options">
        <button
          className={currentDestination.id === "0" ? "active-btn" : ""}
          onClick={() => changeDestination("0")}
        >
          Moon
        </button>
        <button
          className={currentDestination.id === "1" ? "active-btn" : ""}
          onClick={() => changeDestination("1")}
        >
          Mars
        </button>
        <button
          className={currentDestination.id === "2" ? "active-btn" : ""}
          onClick={() => changeDestination("2")}
        >
          Europa
        </button>
        <button
          className={currentDestination.id === "3" ? "active-btn" : ""}
          onClick={() => changeDestination("3")}
        >
          Titan
        </button>
      </div>

      <SingleDestination {...currentDestination} />
    </div>
  );
};

export default Destination;
