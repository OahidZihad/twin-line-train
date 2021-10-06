import React from "react";
import "./Footer.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="d-flex justify-content-center mt-5 pt-5">
      <div
        className="row text-secondary w-75 footer-section"
        style={{ fontWeight: "500" }}
      >
        <div className="col-md-4">
          <p className="mt-5">Emergency Services</p>
          <p>Fresh Foods</p>
          <p>Chain System</p>
          <p>Payment System</p>
          <p>Air Condition</p>
        </div>
        <div className="col-md-4">
          <h6 className="mb-4 text-brand" style={{ fontWeight: "bold" }}>
            Services
          </h6>
          <p>Emergency Health Care</p>
          <p>Business Class</p>
          <p>Economy Class</p>
          <p>Normal Chair</p>
          <p>Hanging</p>
          <p>RFID Card Punch</p>
          <p>CCTV Monitoring</p>
        </div>

        <div className="col-md-4">
          <h6 className="mb-4 text-brand" style={{ fontWeight: "bold" }}>
            Our Address
          </h6>
          {/* <p>
            Haji Bari Mosque, Hajir Bazar <br />
            Vatara, Dhaka - 1229
          </p> */}
          <p>102/1, Sukrabad Mirpur Rd</p>
          <p>DIU, Dhaka 1207</p>
          <div className="mt-5 mb-5">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
            <FontAwesomeIcon
              icon={["fab", "google-plus"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
          </div>
          <div className="mt-2 pt-2 ">
            <p className="call-now">Call Now</p>
            <button
              className="btn btn-brand"
              style={{
                backgroundColor: "#6ACECE",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              +88 01675193182
            </button>
          </div>
        </div>
        <footer className="text-center mt-5 pt-5">
          <p className="text-brand">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
