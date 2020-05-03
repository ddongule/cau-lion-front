import React from "react";
import Navbar from "../../components/common/nav/Navbar";
import Login from "../../components/accounts/Login";
import Footer from "../../components/common/Footer";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Accounts;
