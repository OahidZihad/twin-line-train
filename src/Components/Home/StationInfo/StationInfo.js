import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import station from "../../../images/station.png";

const StationInfo = () => {
  return (
    <section>
      <div className="mt-2">
        <Navbar></Navbar>
      </div>
      <div className="d-flex justify-content-center color-brand pt-5 pb-5 mt-3">
        <img style={{ width: "70%" }} src={station} alt="" />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default StationInfo;
