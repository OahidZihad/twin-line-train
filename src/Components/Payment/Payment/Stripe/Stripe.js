import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
import SplitCardForm from "./SplitCardForm";
// import { CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JMnspHFvhstygxcaFBRaobYegmUkgERarf1kQAojiBT0LyerjJoH3w2o3T0wFXZcJTd7fTgE1eNtDSO4SCSmWTJ00YViGabVt"
);
const Stripe = () => {
  return (
    <Elements stripe={stripePromise}>
      {/* <SimpleCardForm></SimpleCardForm> */}
      <SplitCardForm></SplitCardForm>
    </Elements>
  );
};

export default Stripe;
