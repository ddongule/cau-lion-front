import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "../routes/Home";
import LogIn from "../../pages/accounts/LogIn";
import SignUp from "../../pages/accounts/SignUp";
import NavBar from "../../components/common/nav/Navbar";
import Footer from "../../components/common/Footer";

class Index extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" component={Router} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default Index;
