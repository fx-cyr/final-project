import React, { useContext, useState } from "react";
import Header from "./Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { colorSet } from "../styles/Colors";
import styled from "styled-components";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Transactions from "./Transactions";
import Dashboard from "./Dashboard";
import Budget from "./Budget";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { useAuth } from "../contexts/authContext";

function App() {
  const [month, setMonth] = useState("");
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header month={month} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <div>
              {currentUser ? (
                <Dashboard month={month} setMonth={setMonth} />
              ) : (
                <Login />
              )}
            </div>
          </Route>
          <Route path="/transactions">
            <div>{currentUser ? <Transactions /> : <Login />}</div>
          </Route>
          <Route path="/budget">
            <div>{currentUser ? <Budget /> : <Login />}</div>
          </Route>
          <Route path="/signup">
            <div>
              <Signup />
            </div>
          </Route>
          <Route path="/login">
            <div>
              <Login />
            </div>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  background-color: black;
`;

export default App;
