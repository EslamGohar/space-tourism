import React from "react";
import "../styles/destination.scss";

export const SingleDestination = ({
  name,
  images,
  description,
  distance,
  travelTime,
}) => {
  return (
    <div className="destination">
      <div className="destination-image" key={Math.random()}>
        <img src={images.png} alt={name} />
      </div>

      <div className="destination-info" key={Math.random()}>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <hr />
        <div className="travel-data">
          <div className="distance">
            <span className="label">avg. distance</span>
            <span className="data">{distance}</span>
          </div>
          <div className="travel-time">
            <span className="label">avg. travel time</span>
            <span className="data">{travelTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
