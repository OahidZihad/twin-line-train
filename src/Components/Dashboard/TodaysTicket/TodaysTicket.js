import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const TodaysTicket = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [tickets, setTickets] = useState([]);

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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTickets(data);
      });
  }, [selectedDate]);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 my-5 ms-5 ps-5">
          <h2 className="text-brand mb-4">Today's Tickets :</h2>
          <table className="table table-borderless color-brand text-white text-lowercase">
            <thead>
              <tr>
                <th className="text-uppercase text-center" scope="col">
                  Sr No
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Name
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Gender
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Age
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Weight
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Phone
                </th>
                <th className="text-uppercase text-center" scope="col">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((appointment, index) => (
                <tr>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{appointment.name}</td>
                  <td className="text-center">{appointment.gender}</td>
                  <td className="text-center">{appointment.age}</td>
                  <td className="text-center">{appointment.weight}KG</td>
                  <td className="text-center">{appointment.phone}</td>
                  <td className="text-center">{appointment.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TodaysTicket;
