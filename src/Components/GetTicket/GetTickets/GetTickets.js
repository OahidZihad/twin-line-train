import React, { useState } from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import GetTicketHeader from "../GetTicketHeader/GetTicketHeader";

const GetTickets = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <GetTicketHeader handleDateChange={handleDateChange}></GetTicketHeader>
      <Footer></Footer>
    </div>
  );
};

export default GetTickets;
