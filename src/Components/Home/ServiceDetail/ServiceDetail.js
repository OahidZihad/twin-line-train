import React from "react";

const ServiceDetail = (props) => {
  const { name, img, description } = props.service;
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "50px" }} src={img} alt="" />
      <h5 className="my-4">{name}</h5>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default ServiceDetail;
