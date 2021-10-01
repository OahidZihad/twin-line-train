import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import GetTickets from "./Components/GetTicket/GetTickets/GetTickets";
import "./App.css";
import Payment from "./Components/Payment/Payment/Payment";
import Bkash from "./Components/Payment/Payment/Bkash/Bkash";
import Stripe from "./Components/Payment/Payment/Stripe/Stripe";
import LostAndFound from "./Components/Home/LostAndFound/LostAndFound";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardMain from "./Components/Dashboard/DashboardMain/DashboardMain";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import TodaysTicket from "./Components/Dashboard/TodaysTicket/TodaysTicket";
import FindYourItems from "./Components/Home/FindYourItems/FindYourItems";

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
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/tickets">
            <GetTickets></GetTickets>
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/bkash">
            <Bkash></Bkash>
          </PrivateRoute>
          <PrivateRoute path="/stripe">
            <Stripe></Stripe>
          </PrivateRoute>
          <PrivateRoute path="/lostAndFound">
            <LostAndFound></LostAndFound>
          </PrivateRoute>
          <PrivateRoute path="/findYourItems">
            <FindYourItems></FindYourItems>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/tickets">
            <DashboardMain></DashboardMain>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/ticketsByDate">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/todaysTicket">
            <TodaysTicket></TodaysTicket>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
