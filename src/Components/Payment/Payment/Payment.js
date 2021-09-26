import React from "react";
import { useHistory } from "react-router";
import bkash from "../../../images/bkash1.png";
import stripe from "../../../images/stripe1.png";

const Payment = () => {
  const history = useHistory();

  const handleBkash = () => {
    history.push("/bkash");
  };
  const handleStripe = () => {
    history.push("/stripe");
  };
  return (
    <div>
      <h1
        className="text-center text-brand mt-5 pt-5"
        style={{ fontSize: "55px", textTransform: "uppercase" }}
      >
        In which method do you want to pay?
      </h1>
      <div className="d-flex justify-content-center mt-5 pt-3">
        <div class="card" className="col-md-3 me-4">
          <img
            onClick={handleBkash}
            src={bkash}
            class="card-img-top"
            style={{ cursor: "pointer" }}
            alt="..."
          />
        </div>
        <div
          class="card"
          className="col-md-3"
          style={{ borderLeft: "1px solid #800000" }}
        >
          <img
            onClick={handleStripe}
            src={stripe}
            class="card-img-top"
            style={{ cursor: "pointer" }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
