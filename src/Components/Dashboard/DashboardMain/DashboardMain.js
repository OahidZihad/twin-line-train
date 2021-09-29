import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const DashboardMain = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/tickets")
      .then((response) => response.json())
      .then((data) => {
        console.log("ticket data", data);
        setTickets(data);
      });
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 row mt-4">
          <div className="col-md-2 ms-4 me-5 mt-2">
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#F1536E",
                color: "white",
                border: "none",
                borderRadius: "10px",
                height: "80px",
                width: "250px",
              }}
            >
              <div className="ms-5 align-items-center justify-content-center d-flex">
                <h1>05</h1>
              </div>
              <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                <p style={{ lineHeight: "20px" }}>Pending Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 ms-4 mt-2 me-5">
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#3DA5F4",
                color: "white",
                border: "none",
                borderRadius: "10px",
                height: "80px",
                width: "250px",
              }}
            >
              <div className="ms-5 align-items-center justify-content-center d-flex">
                <h1>05</h1>
              </div>
              <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                <p style={{ lineHeight: "20px" }}>Today's Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 ms-4 mt-2 me-5">
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#00C689",
                color: "white",
                border: "none",
                borderRadius: "10px",
                height: "80px",
                width: "250px",
              }}
            >
              <div className="ms-3 align-items-center justify-content-center d-flex">
                <h1>{tickets.length}</h1>
              </div>
              <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                <p style={{ lineHeight: "20px" }}>
                  Total
                  <br />
                  Appointments
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 ms-4 mt-2">
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#FDA006",
                color: "white",
                border: "none",
                borderRadius: "10px",
                height: "80px",
                width: "250px",
              }}
            >
              <div className="ms-3 align-items-center justify-content-center d-flex">
                <h1>05</h1>
              </div>
              <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                <p style={{ lineHeight: "20px" }}>
                  Total
                  <br />
                  Patients
                </p>
              </div>
            </div>
          </div>
          <div className="ms-4 mt-4 justify-content-center d-flex">
            <h4>Total Appointments</h4>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-75" style={{ backgroundColor: "#F4FDFB" }}>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="text-secondary text-center" scope="col">
                      Sr No
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Name
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Gender
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Age
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Phone
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Email
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Service
                    </th>
                    <th className="text-secondary text-center" scope="col">
                      Action
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
                      <td className="text-center">{appointment.phone}</td>
                      <td className="text-center">{appointment.email}</td>
                      <td className="text-center">{appointment.service}</td>
                      <td className="text-center">Update / Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
