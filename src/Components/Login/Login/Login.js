import React, { useContext, useEffect, useState } from "react";
import loginBg from "../../../images/loginBG.png";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import "firebase/auth";
require("firebase/auth");

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    window.sessionStorage.setItem("loggedInUser", loggedInUser.email);
  });

  // useEffect(() => {
  //   const loggedInUserData = window.sessionStorage.getItem("loggedInUser");
  //   console.log("loggedInUserData", loggedInUserData);
  //   setLoggedInUser(loggedInUserData);
  // });

  console.log("current loggedInUser", loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        // Sign-out successful.
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          error: "",
          success: false,
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        // An error happened.
        console.log(err.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user, event) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log("res", res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };

          newUserInfo.isSignedIn = true;
          newUserInfo.name = res.user.displayName;

          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          setUserToken();
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    event.preventDefault(); // submit korar por page reload hoy...
    // sei reload k bondho kortei preventDefault() function use kora hoy
  };

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    // onClick="handleSignIn"
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
          <img className="img-fluid" src={loginBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
