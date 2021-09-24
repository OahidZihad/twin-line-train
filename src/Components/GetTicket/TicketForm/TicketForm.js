import React, { useState, useScript, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./TicketForm.css";
import { Helmet } from "react-helmet";

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
  //   useScript("./TicketFormJavascript.js");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [ticketPrice, setTicketPrice] = useState(0);
  const handleClass = () => {
    setTicketPrice(document.getElementById("movie").value);
  };
  console.log(ticketPrice);

  //   const handleTicketProperty = (event) => {
  //     ticketPrice = event.target.value;
  //     console.log(ticketPrice);
  //     setTicketData(event.target.selectedIndex, event.target.value);
  //     updateSelectedCount();
  //   };

  //   const setTicketData = (ticketIndex, selectedTicketPrice) => {
  //     window.localStorage.setItem("selectedTicketIndex", ticketIndex);
  //     window.localStorage.setItem("selectedTicketPrice", selectedTicketPrice);
  //   };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const updateSelectedCount = () => {
    setSelectedSeats(document.querySelectorAll(".row1 .seat.selected"));
    console.log(selectedSeats); //selectedSeats er Length er sathe 1 jog korte hobe.... {problem}

    // setSeats(document.querySelectorAll("row1 .seat:not(.occupied"));
    // const seatsIndex = [...selectedSeats].map((seat) =>
    //   [...seats].indexOf(seat)
    // );
    // localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length + 1;
    console.log("seat length", selectedSeatsCount);

    setCount(document.getElementById("count").innerText);
    setCount(selectedSeatsCount);
    console.log("count", count);

    setTotal(document.getElementById("total").innerText);
    setTotal(selectedSeatsCount * ticketPrice);
    console.log("Total", total);

    // const count1 = selectedSeatsCount;
    // setCount(count1);
    // const total1 = selectedSeats.length * ticketPrice;
    // setTotal(total1);

    // console.log(count, total);
  };

  //   const [selectedSeatsLS, setSelectedSeatsLS] = useState();
  //   const [ticketSelect, setTicketSelect] = useState();

  //   const populateUI = () => {
  //     setSelectedSeatsLS(JSON.parse(localStorage.getItem("selectedSeats")));
  //     if (selectedSeatsLS !== null && selectedSeatsLS.length > 0) {
  //       seats.forEach((seat, index) => {
  //         if (selectedSeatsLS.indexOf(index) > -1) {
  //           seat.classList.add("selected");
  //         }
  //       });
  //     }
  //     const selectedTicketIndex = localStorage.getItem("selectedTicketIndex");

  //     if (selectedTicketIndex !== null) {
  //       setTicketSelect(document.getElementById("movie"));
  //       ticketSelect.selectedIndex = selectedTicketIndex;
  //     }
  //   };

  const handleContainer = (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      console.log(e.target);
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
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
                <div className="col-6">
                  <select
                    className="form-control form-select"
                    {...register("from", { required: true })}
                  >
                    <option selected disabled={true} value="Not set">
                      From
                    </option>
                    <option value="Airport">Airport</option>
                    <option value="Khilkhet">Khilkhet</option>
                    <option value="Purbachal">Purbachal</option>
                    <option value="Bashundhara">Bashundhara</option>
                    <option value="Jamuna Future Park">
                      Jamuna Future Park
                    </option>
                    <option value="Baridhara">Baridhara</option>
                    <option value="Gulshan-2">Gulshan-2</option>
                    <option value="Banani">Banani</option>
                    <option value="Mirpur 14">Mirpur 14</option>
                  </select>
                  {errors.from && (
                    <span className="text-white">This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <select
                    className="form-control form-select"
                    {...register("to", { required: true })}
                  >
                    <option selected disabled={true} value="Not set">
                      To
                    </option>
                    <option value="Airport">Airport</option>
                    <option value="Khilkhet">Khilkhet</option>
                    <option value="Purbachal">Purbachal</option>
                    <option value="Bashundhara">Bashundhara</option>
                    <option value="Jamuna Future Park">
                      Jamuna Future Park
                    </option>
                    <option value="Baridhara">Baridhara</option>
                    <option value="Gulshan-2">Gulshan-2</option>
                    <option value="Banani">Banani</option>
                    <option value="Mirpur 14">Mirpur 14</option>
                  </select>
                  {errors.to && (
                    <span className="text-white">This field is required</span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <select
                id="movie"
                onClick={handleClass}
                // onChange={handleTicketProperty}
                className="form-control form-select mb-3"
                {...register("class", { required: true })}
              >
                <option selected disabled={true} value="0">
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

              <div className="d-flex justify-content-center">
                <ul class="showcase">
                  <li>
                    <div class="seat"></div>
                    <small>Available</small>
                  </li>

                  <li>
                    <div
                      //   onClick={updateSelectedCount}
                      class="seat selected"
                    ></div>
                    <small>Selected</small>
                  </li>

                  <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                  </li>
                </ul>
              </div>

              <div
                //   onClick={handleSeat}
                onClick={handleContainer}
                class="container"
              >
                <div class="row1 d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row1 d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row1 d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                </div>

                <div class="row1 d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row1 d-flex justify-content-center">
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row1 d-flex justify-content-center">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                </div>
              </div>

              <p class="text text-white text-center">
                You have selected <span id="count">{count}</span> seats for a
                price of
                <span id="total"> {total}</span> BDT
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
      {/* <Helmet>
        <script src="./useScript.js"></script>
      </Helmet> */}
    </div>
  );
};

export default TicketForm;
