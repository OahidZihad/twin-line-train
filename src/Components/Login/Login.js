import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import firebase from "firebase/app";
// import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import loginBG from "../../images/loginBG.png";
// require("firebase/auth");

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    window.sessionStorage.setItem("loggedInUser", loggedInUser.email);
  });

  console.log("current loggedInUser", loggedInUser);
  //   const history = useHistory();
  //   const location = useLocation();
  //   const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  //   const handleSignOut = () => {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then((res) => {
  //         // Sign-out successful.
  //         const signedOutUser = {
  //           isSignedIn: false,
  //           name: "",
  //           photo: "",
  //           email: "",
  //           error: "",
  //           success: false,
  //         };
  //         setUser(signedOutUser);
  //       })
  //       .catch((err) => {
  //         // An error happened.
  //         console.log(err.message);
  //       });
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  return (
    <section className="d-flex justify-content-center">
      <div className="row m-0 px-5 my-3">
        <div className="col-md-6 mt-5">
          <div
            style={{ boxShadow: "3px 3px 5px gray" }}
            className="card p-4 mt-5"
          >
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                  {newUser && (
                    <div>
                      <label for="name">Name</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Name"
                        class="form-control"
                        {...register("name", { required: true })}
                      />
                      <br />
                    </div>
                  )}

                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <br />
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-brand text-white"
                    onClick="handleSignIn"
                  >
                    {newUser ? "Sign Up" : "Sign In"}
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <small
                  onClick={() => setNewUser(!newUser)}
                  name="newUser"
                  className="text-secondary text-uppercase"
                  style={{ cursor: "pointer" }}
                >
                  {newUser ? "go to Sign In page" : "Create a New Account"}
                </small>
              </div>
              <p style={{ color: "red" }}>{user.error}</p>
              {user.success && (
                <p style={{ color: "green" }}>
                  User {newUser ? "Created" : "Logged in"} Successfully
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={loginBG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
