import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import train3 from "../../../images/train3.jpg";

const GetTicketHeader = ({ handleDateChange }) => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 className="text-brand">Select Journey Date</h1>
        <Calendar
          className="mt-5 border-0 text-brand color-brand"
          onChange={handleDateChange}
          value={new Date()}
        />
      </div>
      <div className="col-md-6">
        <img
          src={train3}
          alt=""
          className="img-fluid"
          style={{ borderRadius: "15px", border: "5px solid #900000" }}
        />
      </div>
    </main>
  );
};

export default GetTicketHeader;
