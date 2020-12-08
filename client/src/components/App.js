import React, { useContext } from "react";
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
import { FirebaseContext } from "../contexts/firebaseContext";
import { app } from "firebase";
import Budget from "./Budget";

function App() {
  const { signInWithGoogle } = useContext(FirebaseContext);
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <button onClick={signInWithGoogle}>Sign In</button>
        <Switch>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route path="/dashboard">
            <div>
              <Dashboard />
            </div>
          </Route>
          <Route path="/transactions">
            <div>
              <Transactions />
            </div>
          </Route>
          <Route path="/budget">
            <div>
              <Budget />
            </div>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100%;
  background-color: black;
`;

export default App;
