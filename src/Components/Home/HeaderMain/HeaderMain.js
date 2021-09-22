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
        <h1 style={{ color: "#3a4256", fontWeight: "bold" }}>
          Your Journey Starts
          <br />
          Here
        </h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          sunt necessitatibus, doloribus earum perferendis eligendi, commodi
          quaerat debitis repellendus deserunt fugiat! Labore repellendus quam
          ab autem adipisci culpa minima deserunt.
        </p>
        <button
          className="btn btn-brand text-white"
          style={{ fontWeight: 600 }}
          onClick={handleTicket}
        >
          GET TICKET
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
