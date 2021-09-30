import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import TicketsByDate from "../TicketsByDate/TicketsByDate";
import "./Dashboard.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  //   height: "100vh",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [tickets, setTickets] = useState([]);

  console.log("tickets", tickets);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  useEffect(() => {
    fetch("http://localhost:4000/ticketsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        date: selectedDate,
        email: sessionStorage.getItem("loggedInUser"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data ui", data);
        setTickets(data);
      });
  }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 d-flex justify-content-center calendar-height">
          <Calendar
            className="color-brand text-white"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5">
          {/* <AppointmentsByDate appointment={appointments}></AppointmentsByDate> */}
          <TicketsByDate ticket={tickets}></TicketsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
