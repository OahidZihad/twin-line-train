import React from "react";
import testimonial from "../../../images/testimonial1.png";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";

const testimonialData = [
  {
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distrubu to using Content here, content",
    img: patient1,
    name: "Winson Herry",
    address: "California",
  },
  {
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distrubu to using Content here, content",
    img: patient2,
    name: "Winson Herry",
    address: "California",
  },
  {
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distrubu to using Content here, content",
    img: patient3,
    name: "Winson Herry",
    address: "California",
  },
];

const Testimonial = () => {
  return (
    <section id="reviews">
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          <div className="col-md-4 mt-5">
            <h2 className="mt-3 text-brand">
              What's Our Customer <br />
              Says
            </h2>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-3">
            <img
              className="ms-5 w-75"
              style={{ height: "180px", opacity: ".2" }}
              src={testimonial}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {testimonialData.map((testimonial) => (
            <TestimonialDetail testimonial={testimonial}></TestimonialDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
