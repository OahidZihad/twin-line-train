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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
  },
  {
    name: "Emergency Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
    img: treatment,
  },
  {
    name: "Fresh Foods",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
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
