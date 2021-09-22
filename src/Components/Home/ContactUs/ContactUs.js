import { useForm } from "react-hook-form";
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitContact = (data) => {
    console.log(data);
  };

  return (
    <section id="contactUs" className="d-flex justify-content-center mt-5 pt-5">
      <div className="w-75 contact-us">
        <div className="text-center mt-5 pt-5" style={{ opacity: ".9" }}>
          <h2 className="text-white">Share Your Thought With Us</h2>
        </div>
        <div className="mx-5 px-5 my-3">
          <form
            style={{ opacity: ".9" }}
            className="p-5"
            onSubmit={handleSubmit(onSubmitContact)}
          >
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Email"
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
                placeholder="Subject"
                className="form-control"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div class="form-group">
              <textarea
                type="text"
                className="form-control mb-3"
                placeholder="Your Message"
                rows="3"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
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
    </section>
  );
};

export default ContactUs;
