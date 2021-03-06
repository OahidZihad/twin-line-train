import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch("https://nameless-waters-10044.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: sessionStorage.getItem("loggedInUser") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, []);

  const handleDashboard = () => {
    history.push("/dashboard/tickets");
  };

  const handleTicket = () => {
    history.push("/dashboard/ticketsByDate");
  };

  const handleTodaysTicket = () => {
    history.push("/dashboard/todaysTicket");
  };

  const handleAddAdmin = () => {
    history.push("/dashboard/addAdmin");
  };

  const handleSettings = () => {
    history.push("/dashboard/settings");
  };

  const handleSignOut = (e) => {
    sessionStorage.clear();
    window.location.reload();
    history.push("/login");
  };

  return (
    <div
      className="sidebar color-brand d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleDashboard}
          >
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </div>
        </li>
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleTicket}
          >
            <FontAwesomeIcon icon={faCalendar} /> <span>Tickets</span>
          </div>
        </li>
        {isAdmin && (
          <div>
            <li>
              <div
                style={{ cursor: "pointer" }}
                className="text-white"
                onClick={handleTodaysTicket}
              >
                <FontAwesomeIcon icon={faUsers} /> <span>Todays Tickets</span>
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                className="text-white"
                onClick={handleAddAdmin}
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
              </div>
            </li>
          </div>
        )}
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleSettings}
          >
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </div>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white"></Link>
        <div
          style={{ cursor: "pointer" }}
          className="text-white"
          onClick={handleSignOut}
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
