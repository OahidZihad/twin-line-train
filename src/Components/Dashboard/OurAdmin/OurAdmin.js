import React, { useEffect, useState } from "react";
import OurAdminDetail from "../OurAdminDetail/OurAdminDetail";

const OurAdmin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("https://nameless-waters-10044.herokuapp.com/admins")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  return (
    <section>
      <div className="mt-4">
        <h2 className="text-center text-brand">Our Admin</h2>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="container row">
          {admins.map((admin) => (
            <OurAdminDetail key={admin._id} admin={admin}></OurAdminDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdmin;
