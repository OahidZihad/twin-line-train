import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const TourGuide = () => {
  return (
    <section>
      <div className="mt-2">
        <Navbar></Navbar>
      </div>
      <div className="container bg-dark mt-5 px-5 py-5">
        <div className="container-fluid fst-italic  text-white">
          <br />
          <h1 className="d-flex justify-content-center">
            How to Ride Metro Rail
          </h1>
          <br />
          <h3>1. Get to your station</h3>
          <p>Arrive 10 minutes early and wait for your train to arrive.</p>
          <br />

          <h3>2. Pay with TAP</h3>
          <p>
            Buy a TAP card and load fare at the TAP vending machine. As you pass
            through the turnstile or validator, TAP on dial to enter to the
            platform/waiting are
          </p>
          <br />

          <h3>3. Board the Train</h3>
          <p>
            Wait for train to make a complete stop and stand behind the yellow
            line. Let others exit before entering. Take a seat or use
            handrails/handholds.
          </p>
          <br />

          <h3>4. Enjoy the Ride</h3>
          <p>
            Watch and listen for your stop. As you get closer to your
            destination, move towards the exiting doors. Wait for doors to open
            and exit, make sure you have all your belongings.
          </p>
          <br />

          <h3>5. Exit the Train</h3>

          <p>
            Watch and listen for your stop. As you get closer to your
            destination, move towards the exiting doors. Wait for doors to open
            and exit, make sure you have all your belongings.
          </p>
          <br />

          <div className="text-success bg-white py-3 ">
            <h1 className="justify-content-center d-flex">
              Riding Tips and Safety
            </h1>
            <p className="justify-content-center d-flex">
              Always stand way from the edge of the platform. <br />
              Don’t lean against the train doors, keep hands clear. <br />
              Use the overhead maps to help you watch for your station. <br />
              Check to be sure you have all your belongings. <br />
              Look both way when crossing the tracks.
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default TourGuide;
