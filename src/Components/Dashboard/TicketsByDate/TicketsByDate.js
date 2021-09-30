import React from "react";

const TicketsByDate = ({ ticket }) => {
  console.log({ ticket });
  return (
    <div>
      <h2 className="text-brand text-center">Appointments</h2>
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
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {ticket.map((app) => (
                <tr>
                  <td>{app.name}</td>
                  <td>{app.phone}</td>
                  <td>{app.email}</td>
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
