import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InforCard.css";

const InfoCard = (props) => {
  const { icon, title, description, background } = props.info;
  return (
    <div className="col-md-4 text-white info-card">
      <div
        className={`d-flex justify-content-center align-items-center info-container info-${background}`}
      >
        <div className="me-3">
          <FontAwesomeIcon className="info-icon" icon={icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
