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
      <div className="mt-5 pt-5">
        <h2 className="text-center text-brand">About Us /Our Admin</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          {admins.map((admin) => (
            <OurAdminDetail key={admin._id} admin={admin}></OurAdminDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdmin;
