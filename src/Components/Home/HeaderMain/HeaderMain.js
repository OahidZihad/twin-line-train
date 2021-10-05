import React from "react";
import train from "../../../images/train2.png";
import { useHistory } from "react-router-dom";

const HeaderMain = () => {
  const history = useHistory();

  function handleTicket() {
    history.push("tickets");
  }
  return (
    <main
      style={{ height: "600px" }}
      className="row m-0 d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#800000", fontWeight: "bold" }}>
          Your Journey Starts
          <br />
          Here
        </h1>
        <p className="">
          Metro Rail is a true online travel agency for Bangladeshi people with
          lowest price guarantee. We are offering ready-made and customized
          both travel itineraries. An online user easily can book any tour
          packages.
        </p>
        <button
          className="btn btn-brand text-white"
          style={{ fontWeight: 600 }}
          onClick={handleTicket}
        >
          TIME TRAVEL
        </button>
      </div>
      <div className="col-md-6">
        <img
          style={{ width: "100%" }}
          src={train}
          alt=""
          className="img-fluid"
        />
      </div>
    </main>
  );
};

export default HeaderMain;
