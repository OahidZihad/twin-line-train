import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const DashboardMain = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("https://nameless-waters-10044.herokuapp.com/tickets")
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
        <div className="col-md-10 ">
          <div className="row mt-4 ms-2">
            <div className="col-md-3 ms-2 me-5">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: "#F1536E",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  height: "100px",
                  width: "350px",
                }}
              >
                <div className="align-items-center justify-content-center d-flex">
                  <h1>05</h1>
                </div>
                <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                  <p style={{ lineHeight: "20px", fontSize: "30px" }}>
                    Toal Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ms-4 me-4">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: "#3DA5F4",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  height: "100px",
                  width: "350px",
                }}
              >
                <div className="align-items-center justify-content-center d-flex">
                  <h1>0{tickets.length}</h1>
                </div>
                <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                  <p style={{ lineHeight: "20px", fontSize: "30px" }}>
                    Total Tickets
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ms-5">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: "#00C689",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  height: "100px",
                  width: "350px",
                }}
              >
                <div className="align-items-center justify-content-center d-flex">
                  <h1>05</h1>
                </div>
                <div className="ms-3 mt-2 align-items-center justify-content-center d-flex">
                  <p style={{ lineHeight: "20px", fontSize: "30px" }}>
                    Today's Tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-4 mt-4">
            <h2 className="text-brand ms-5 ps-3">Total Tickets : </h2>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="" style={{ backgroundColor: "#F4FDFB" }}>
              <table className="table table-borderless color-brand2 text-dark text-lowercase">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase" scope="col">
                      Sr No
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      Name
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      Phone
                    </th>

                    <th className="text-center text-uppercase" scope="col">
                      Shift
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      Time
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      Class & Price
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      From
                    </th>
                    <th className="text-center text-uppercase" scope="col">
                      To
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((tickets, index) => (
                    <tr>
                      <td className="text-center text-white">{index + 1}</td>
                      <td className="text-center text-white">{tickets.name}</td>
                      <td className="text-center text-white">
                        {tickets.phone}
                      </td>

                      <td className="text-center text-white">
                        {tickets.service}
                      </td>
                      <td className="text-center text-white">{tickets.time}</td>
                      <td className="text-center text-white">
                        {tickets.className}
                      </td>
                      <td className="text-center text-white">{tickets.from}</td>
                      <td className="text-center text-white">{tickets.to}</td>
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
