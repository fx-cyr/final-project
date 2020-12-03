import React from "react";
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

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route path="/transactions">
            <div>
              <Transactions />
            </div>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  background-color: black;
`;

export default App;
