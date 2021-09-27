import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import bkash from "../../../../images/bkash1.png";

const Bkash = () => {
  const [transaction, setTransaction] = useState("");
  console.log("trans", transaction);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTransaction(data.transaction);
  };

  const handleButton = () => {
    history.push("/home");
  };
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <div class="card" className="col-md-3">
          <img src={bkash} class="card-img-top" alt="..." />
        </div>
      </div>
      <div className="container center_div">
        <div className="text-brand ms-3">
          <h1>Bkash Merchant Number</h1>
        </div>
        <div className="d-flex justify-content-center ms-5 color-brand text-white mt-2 mb-4 w-75">
          <h2>01755 555555</h2>
        </div>
        <div className="text-brand mb-3">
          <h4>Enter Transection Number Within 30 Minutes</h4>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ width: "100%" }}
              placeholder="Transaction Number"
              {...register("transaction", { required: true })}
            />
            {errors.transaction && (
              <span className="text-danger">This field is required</span>
            )}

            <div className="d-flex justify-content-center me-4">
              <button
                type="submit"
                style={{ color: "white", backgroundColor: "#800000" }}
              >
                Pay Now
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-center mt-3 me-4">
            {/* {paymentError && <p style={{ color: "red" }}>{paymentError}</p>} */}
            {transaction && (
              <div>
                <p style={{ color: "green" }}>Your payment was successful</p>
                <button
                  className="ms-4 w-75 btn-success"
                  onClick={handleButton}
                >
                  Go To Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkash;
