import { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log("app.js loggedInUser", loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
