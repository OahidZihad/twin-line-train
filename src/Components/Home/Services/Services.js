import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import food from "../../../images/food.png";
import rfid from "../../../images/rfid.png";
import treatment from "../../../images/treatment.png";

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
        <h5 style={{ color: "#53DDD7" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3E465A" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail key={service.name} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
