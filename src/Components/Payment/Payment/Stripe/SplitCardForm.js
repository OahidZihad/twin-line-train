import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./SimpleCardForm.css";
import { Redirect, useHistory } from "react-router";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });
    console.log("[PaymentMethod]", paymentMethod);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
    }
    // handleButton();
  };

  const handleButton = () => {
    history.push("/home");
  };

  return (
    <div className="container center_div">
      <form
        className="mt-5 pt-5"
        onSubmit={handleSubmit}
        style={{
          fontSize: "18px",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <label style={{ width: "100%" }}>
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br />
        <label style={{ width: "100%" }}>
          Expiration date
          <CardExpiryElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br />
        <label style={{ width: "100%" }}>
          CVC
          <CardCvcElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center mt-4">
        {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
        {paymentSuccess && (
          <div>
            <p style={{ color: "green" }}>Your payment was successful</p>
            <button className="ms-4 w-75 btn-success" onClick={handleButton}>
              Go To Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitCardForm;
