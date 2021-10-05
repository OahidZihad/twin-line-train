import React from "react";
import testimonial from "../../../images/testimonial1.png";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";

const testimonialData = [
  {
    description:
      "Very good tour and travel agency in Bangladesh in terms of quality service with low prices. It was a great pleasure tour for my friends and family. Thank You.",
    img: patient1,
    name: "Tariqul Tushar",
    address: "Dhanmondi",
  },
  {
    description:
      "Few things command more respect than hard work, integrity, dedication and the ability to follow through. This travel agent is an excellent listener and pays attention to detail.",
    img: patient2,
    name: "Soaib Mashrafi",
    address: "Mirpur",
  },
  {
    description:
      "Uber Health helps us stay on schedule for our enrollment. The rides get participants here who would have otherwise not shown up. Overall experience is good.",
    img: patient3,
    name: "Abu Sayem",
    address: "Uttara",
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
