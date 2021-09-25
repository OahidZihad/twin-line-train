import React, { useState } from "react";
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
    console.log("form data", data);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("phone", data.phone);
    localStorage.setItem("From", data.from);
    localStorage.setItem("To", data.to);
  };

  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedSeatsFromLocalStorage, setSelectedSeatsFromLocalStorage] =
    useState();

  window.localStorage.setItem("Total", total);
  window.localStorage.setItem("count", count);

  const ticketData = (classIndex, ticketPrice) => {
    localStorage.setItem("selectedClassIndex", classIndex);
    localStorage.setItem("selectedTicketPrice", ticketPrice);
  };

  ////// NOT WORKING
  const populateUI = () => {
    const localStorageSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    console.log("localStorageSeats", localStorageSeats);
    if (localStorageSeats !== null && localStorageSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (localStorageSeats[index] > -1) {
          console.log("localStorageSeats[index]", localStorageSeats[index]);
          setSelectedSeatsFromLocalStorage(
            JSON.parse(localStorage.getItem("selectedSeats"))
          );

          //   seat.classList.add("selected");
          //   const abc = seat.classList;
          //   if (seat.classList !== "selected") {
          //     // seat.classList.remove("seat");
          //     seat.classList.add("selected");
          //     //   console.log("seat.classList", seat.classList);
          //   }
          console.log("seat.classList out", selectedSeatsFromLocalStorage);
        }
      });
    }
  };

  const handleClass = (e) => {
    const index = e.nativeEvent.target.selectedIndex;
    const className = e.nativeEvent.target[index].text;
    localStorage.setItem("className", className);
    console.log("className", className);
    setTicketPrice(document.getElementById("movie").value);
    console.log("ticketPrice", ticketPrice);
    console.log("selected ticket Price", e.target.value);
    console.log("ticket class Index", e.target.selectedIndex);
    ticketData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  };

  console.log(ticketPrice);

  const updateSelectedCount = () => {
    setSelectedSeats(document.querySelectorAll(".row1 .seat.selected"));
    console.log(selectedSeats); //selectedSeats er Length er sathe 1 jog korte hobe.... {problem}

    setSeats(document.querySelectorAll(".row1 .seat:not(.occupied"));
    console.log("seats", seats);
    const seatsIndex = [...selectedSeats].map(
      (seat) => [...seats].indexOf(seat)
      // seat
    );

    console.log("seatsIndex", seatsIndex);
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length + 1;
    console.log("seat length", selectedSeatsCount);

    setCount(document.getElementById("count").innerText);
    setCount(selectedSeatsCount);

    setTotal(document.getElementById("total").innerText);
    setTotal(selectedSeatsCount * ticketPrice);
  };

  console.log("Total", total);
  console.log("count", count);

  //// not working :-(
  const classSelect = (e) => {
    // setTicketPrice(e.target.value);
    setTicketPrice(document.getElementById("movie").value);
    console.log("ticketPrice", ticketPrice);
    console.log("selected Index", e.target.selectedtedIndex);
    updateSelectedCount();
  };

  const handleContainer = (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      console.log(e.target);
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
    // populateUI();    //Not working
  };

  const myNewFunction = (sel) => {
    console.log(
      "testtesttesttesttesttesttesttesttesttest",
      sel.options[sel.selectedIndex].text
    );
  };

  console.log("count and total", count, total);

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

            <div className="form-group col-md-6">
              <select
                id="movie"
                onClick={handleClass}
                // onChange={classSelect} //not working
                className="form-control form-select mb-3"
                {...register("class", { required: true })}
              >
                {/* <option selected disabled={true} value="0">
                  Select Class
                </option> */}
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
