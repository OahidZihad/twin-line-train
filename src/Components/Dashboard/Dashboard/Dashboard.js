import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar from "../Sidebar/Sidebar";
import TicketsByDate from "../TicketsByDate/TicketsByDate";
import "./Dashboard.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  //   height: "100vh",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [tickets, setTickets] = useState([]);

  console.log("tickets", tickets);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  useEffect(() => {
    fetch("https://nameless-waters-10044.herokuapp.com/ticketsByDate", {
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
      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="navbar-style color-brand">
            <nav style={{ height: "70px" }} class="navbar navbar-light">
              <span
                style={{
                  fontSize: "25px",
                  marginLeft: "20px",
                }}
                class="navbar-brand mb-0 h1 text-white fst-italic "
              >
                Tickets By Date
              </span>
            </nav>
          </div>
          <div className="d-flex">
            <div className="col-md-5 mt-5 mx-5 px-2">
              <Calendar
                className="color-brand2 text-white"
                onChange={handleDateChange}
                value={new Date()}
              />
            </div>
            <div className="col-md-5 ">
              <TicketsByDate ticket={tickets}></TicketsByDate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
