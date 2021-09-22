import React from "react";

const TestimonialDetail = (props) => {
  const { description, img, name, address } = props.testimonial;
  console.log(props);
  return (
    <div className="col-md-4">
      <div className="mt-5 card">
        <div className="card-body">
          <p className="card-text text-secondary">{description}</p>
        </div>
        <div className="d-flex justif0y-content-center">
          <div className="mx-3 mt-4 mb-4">
            <img
              style={{ height: "50px", width: "50px" }}
              src={img}
              className="card-img-bottom"
              alt="..."
            ></img>
          </div>
          <div className="mt-4 mb-4">
            <h6 className="text-brand">{name}</h6>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
