import React from "react";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InforCard";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Dhanmondi, Dhaka",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+88-01675193182",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard key={info.title} info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
