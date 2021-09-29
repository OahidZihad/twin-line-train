import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  //   height: "100vh",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [appointments, setAppointments] = useState([]);

  console.log(loggedInUser.email);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };
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
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
