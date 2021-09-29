import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurAdminDetail = ({ admin }) => {
  return (
    <div className="col-md-4 text-center">
      <div>
        {admin.image ? (
          <img
            style={{ height: "250px", width: "90%" }}
            className="img-fluid mt-3"
            src={`data:image/png;base64,${admin.image.img}`}
            alt=""
          />
        ) : (
          <img
            style={{ height: "250px", width: "90%" }}
            className="img-fluid mb-3"
            src={`https://mysterious-dawn-72386.herokuapp.com/${admin.img}`}
            alt=""
          />
        )}
        <h5 className="mt-2" style={{ fontSize: "16px", marginLeft: "20px" }}>
          {admin.name}
        </h5>
      </div>
      <div
        style={{ marginLeft: "20px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "#6ACECE" }}
            icon={faEnvelope}
          ></FontAwesomeIcon>
        </div>
        <div style={{ fontSize: "14px" }} className="text-secondary ps-2">
          {admin.email}
        </div>
      </div>
    </div>
  );
};

export default OurAdminDetail;
