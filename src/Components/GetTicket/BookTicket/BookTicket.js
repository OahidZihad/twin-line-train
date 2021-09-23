import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    _id: "5e8df50be6e8231764dc23de",
    id: 1,
    subject: "Morning - 01",
    visitingHour: "7:00 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "Morning - 02",
    visitingHour: "10:00 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df5aee6e8231764dc23e0",
    id: 3,
    subject: "Midday",
    visitingHour: "1:00 PM",
    totalSpace: 10,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e3",
    id: 6,
    subject: "Afternoon",
    visitingHour: "5:00 PM",
    totalSpace: 10,
  },
  {
    _id: "5e8df63be6e8231764dc23e1",
    id: 4,
    subject: "Evening",
    visitingHour: "7:00 PM",
    totalSpace: 10,
  },
  {
    _id: "5e8df68de6e8231764dc23e2",
    id: 5,
    subject: "Night",
    visitingHour: "10:00 PM",
    totalSpace: 10,
  },
];

const BookTicket = ({ date }) => {
  return (
    <section>
      <h2 className="text-center" style={{ color: "#1cc7c1" }}>
        Available Appointments on {date.toDateString()}
      </h2>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {bookingData.map((booking) => (
            <BookingCard
              key={booking.id}
              date={date}
              booking={booking}
              time={booking.visitingHour}
            ></BookingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTicket;
