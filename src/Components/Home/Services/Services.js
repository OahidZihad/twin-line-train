import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import food from "../../../images/food.png";
import rfid from "../../../images/rfid.png";
import treatment from "../../../images/treatment.png";
import "./Services.css";

const serviceData = [
  {
    name: "RFID Payment",
    img: rfid,
    description:
      "One such development in payment card industry is the use of Radio Frequency Identification, or RFID technology.",
  },
  {
    name: "Emergency Treatment",
    description:
      "The Emergency Treatment Area (ETA) is a designated area that provides protection to the hospital and care for patients.",
    img: treatment,
  },
  {
    name: "Fresh Foods",
    description:
      "Fresh food is food which has not been preserved and has not spoiled yet. Which is served in metro rail with cheap rate.",
    img: food,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container mt-5">
      <div className="text-center">
        <h2 className="text-brand">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 pt-5 text-brand">
          {serviceData.map((service) => (
            <ServiceDetail key={service.name} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
