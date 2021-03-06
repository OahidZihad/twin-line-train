import { useForm } from "react-hook-form";
import React from "react";
import "./LostAndFound.css";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router";

const LostAndFound = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFindLostItem = () => {
    history.push("/findYourItems");
  };

  const onSubmitContact = (data) => {
    data.date = new Date().toDateString();
    console.log("lost and found data", data);

    fetch("https://nameless-waters-10044.herokuapp.com/lostAndFound", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          alert("Thanks for helping others!");
          window.location.reload();
        }
      });
  };

  return (
    <section id="contactUs" className="">
      <div className="mt-2">
        <Navbar></Navbar>
        <div className="d-flex justify-content-center">
          <div className="contact-us w-75 mt-3">
            <div className="text-center mt-2 pt-5" style={{ opacity: ".9" }}>
              <h2 className="text-white">Please Share, What You Found !</h2>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="bg-danger"
                onClick={handleFindLostItem}
                style={{ opacity: ".9" }}
              >
                Find Your Lost Items
              </button>
            </div>
            <div className="mx-5 px-5">
              <form
                style={{ opacity: ".9" }}
                className="p-4"
                onSubmit={handleSubmit(onSubmitContact)}
              >
                <div class="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="What you found ?"
                    className="form-control"
                    {...register("item", { required: true })}
                  />
                  {errors.item && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div class="form-group">
                  <textarea
                    type="text"
                    className="form-control mb-3"
                    placeholder="Please... give brief description"
                    rows="3"
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group text-center pt-5">
                  <button
                    type="submit"
                    className="btn btn-brand"
                    style={{ color: "white", border: "2px solid white" }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LostAndFound;
