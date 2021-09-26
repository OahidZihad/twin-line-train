import React from "react";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    // const cardExpiryElement = elements.getElement(CardExpiryElement);
    // const cardNumberElement = elements.getElement(CardNumberElement);
    // const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      //   expiry: cardExpiryElement,
      //   number: cardNumberElement,
      //   cvc: cardCvcElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <form
        onSubmit={handleSubmit}
        className="w-50 mt-5 pt-5 mx-5 px-5 color-brand"
      >
        {/* <CardElement className="text-white"></CardElement> */}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#fff",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement /> */}
        <div className="d-flex justify-content-center">
          <button
            className="btn-brand text-white mt-5 mb-5"
            type="submit"
            disabled={!stripe}
            style={{ border: "2px solid #fff", width: "20%" }}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleCardForm;
