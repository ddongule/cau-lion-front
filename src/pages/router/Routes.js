import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../main/Index";
import Login from "../accounts/Login";
import SignUp from "../accounts/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;