import React from "react";

const TicketsByDate = ({ ticket }) => {
  console.log({ ticket });
  return (
    <div>
      <h2 className="text-brand text-center pe-5 me-5 mt-5">Tickets</h2>
      {ticket.length ? (
        <div>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Phone
                </th>
                <th className="text-secondary" scope="col">
                  Class & Price
                </th>
              </tr>
            </thead>
            <tbody>
              {ticket.map((tick) => (
                <tr>
                  <td>{tick.name}</td>
                  <td>{tick.phone}</td>
                  <td>{tick.className}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-5">
          <h4 className="lead text-center">No Appointments for this Date</h4>
        </div>
      )}
    </div>
  );
};

export default TicketsByDate;
