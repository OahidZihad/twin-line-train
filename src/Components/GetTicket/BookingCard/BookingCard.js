import React, { useState } from "react";
import TicketForm from "../TicketForm/TicketForm";

const BookingCard = ({ booking, date, time }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4">
      <div className="card p-3 mt-5 card-testimonial" style={{ width: "100%" }}>
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{booking.subject}</h5>
          <h6>{booking.visitingHour}</h6>
          <p>{booking.totalSpace} SPACES AVAILABLE</p>
          <button onClick={openModal} className="btn btn-brand text-white">
            BOOK APPOINTMENT
          </button>
          <TicketForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={booking.subject}
            date={date}
            time={time}
          ></TicketForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
