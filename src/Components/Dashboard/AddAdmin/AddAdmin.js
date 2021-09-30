import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AddAdmin.css";

const AddAdmin = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(info);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log("File admin", formData);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("http://localhost:4000/addAdmin", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    alert("Admin added Successfully");
    // e.preventDefault();
  };

  return (
    <section>
      <div className="d-flex">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="navbar-style color-brand">
            <nav style={{ height: "70px" }} class="navbar navbar-light">
              <span
                style={{
                  fontSize: "25px",
                  marginLeft: "20px",
                }}
                class="navbar-brand mb-0 h1 text-white fst-italic "
              >
                Add an Admin
              </span>
            </nav>
          </div>
          <div className="mt-3 mx-2 px-2">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label className="text-brand fs-5 fst-italic">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group">
                <label
                  className="text-brand fs-5 fst-italic"
                  for="exampleInputPassword1"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Name"
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group">
                <label
                  className="text-brand fs-5 fst-italic"
                  for="exampleInputPassword1"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Picture"
                  onChange={handleFileChange}
                />
              </div>
              <br />
              <button
                // onClick={handleSubmit}
                type="submit"
                class="btn btn-brand text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;
