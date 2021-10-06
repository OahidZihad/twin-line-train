import React from "react";
import sir from "../../../images/sir.jpg";
import student from "../../../images/student.jpeg";

const AboutUs = () => {
  return (
    <section>
      <div className="mt-5 pt-5">
        <h2 className="text-center text-brand">About Us</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          <div className="col-md-6 text-center">
            <div>
              <img
                style={{ height: "250px", width: "60%" }}
                className="img-fluid mt-3"
                src={sir}
                alt=""
              />
              <h2 className="mt-3">Supervised By</h2>
              <p
                style={{ fontSize: "25px", margin: "0" }}
                className="fst-italic"
              >
                Mr. Raja Tariqul Hasan Tushar
              </p>
              <p className="fst-italic text-muted">
                <span style={{ fontSize: "20px", fontWeight: "" }}>
                  Senior Lecturer
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>
                  Department of Computer Science & Engineering, <br />
                  Faculty of Science & Information Technology{" "}
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>
                  Daffodil International University
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>01675193182</span>{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div>
              <img
                style={{ height: "250px", width: "60%" }}
                className="img-fluid mt-3"
                src={student}
                alt=""
              />
              <h2 className="mt-3">Submitted By</h2>
              <p
                style={{ fontSize: "25px", margin: "0" }}
                className="fst-italic"
              >
                Soaib Mashrafi
              </p>
              <p className="fst-italic text-muted">
                <span style={{ fontSize: "20px", fontWeight: "" }}>
                  ID: 152-155594
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>
                  Department of Computer Science & Engineering, <br />
                  Faculty of Science & Information Technology{" "}
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>
                  Daffodil International University
                </span>{" "}
                <br />
                <span style={{ fontWeight: "" }}>soaib.cse@gmail.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
