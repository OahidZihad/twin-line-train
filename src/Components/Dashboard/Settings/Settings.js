import React from "react";
import OurAdmin from "../OurAdmin/OurAdmin";
import Sidebar from "../Sidebar/Sidebar";

const Settings = () => {
  return (
    <section>
      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <OurAdmin></OurAdmin>
        </div>
      </div>
    </section>
  );
};

export default Settings;
