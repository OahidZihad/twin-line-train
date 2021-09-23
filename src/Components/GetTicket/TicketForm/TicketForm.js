import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./TicketForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#800000",
  },
};

Modal.setAppElement("#root");

const TicketForm = ({ modalIsOpen, closeModal, appointmentOn, date, time }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-white text-center">{appointmentOn}</h2>
        <p className="text-white text-center">
          <small>ON {date.toDateString()}</small> <br />
          <small>AT {time}</small>
        </p>

        <form className="p-5 pt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-white">This field is required</span>
                )}
              </div>
              <div class="form-group  mb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-white">This field is required</span>
                )}
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-white">This field is required</span>
                )}
              </div>
              <div className="form-group row mb-3">
                <div className="col-4">
                  <select
                    className="form-control form-select"
                    {...register("gender", { required: true })}
                  >
                    <option selected disabled={true} value="Not set">
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Not set">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-white">This field is required</span>
                  )}
                </div>
                <div className="col-4">
                  <input
                    {...register("age", { required: true })}
                    className="form-control"
                    placeholder="Your Age"
                    type="number"
                  />
                  {errors.age && (
                    <span className="text-white">This field is required</span>
                  )}
                </div>
                <div className="col-4">
                  <input
                    {...register("weight", { required: true })}
                    className="form-control"
                    placeholder="Weight"
                    type="number"
                  />
                  {errors.weight && (
                    <span className="text-white">This field is required</span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              {/* <div class="movie-container"> */}
              <select
                id="movie"
                className="form-control form-select mb-3"
                {...register("class", { required: true })}
              >
                <option selected disabled={true} value="Not set">
                  Select Class
                </option>
                <option value="8">S-Chair (8 Taka)</option>
                <option value="10">Economy (10 Taka)</option>
                <option value="12">Business (12 Taka)</option>
                <option value="19">Sleeping Bath (19 Taka)</option>
              </select>
              {errors.class && (
                <span className="text-white">This field is required</span>
              )}
              {/* </div> */}

              <div className="d-flex justify-content-center">
                <ul class="showcase">
                  <li>
                    <div class="seat"></div>
                    <small>Available</small>
                  </li>

                  <li>
                    <div class="seat selected"></div>
                    <small>Selected</small>
                  </li>

                  <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                  </li>
                </ul>
              </div>

              <div class="container">
                <div class="row d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                </div>
              </div>

              <p class="text text-white text-center">
                You have selected <span id="count">0</span> seats for a price of
                <span id="total"> 0</span> BDT
              </p>
            </div>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              style={{ color: "white", border: "2px solid white" }}
              className="btn btn-brand"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TicketForm;
