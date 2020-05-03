import React from "react";
import Navbar from "../../components/common/nav/Navbar";
import SignUp from "../../components/accounts/SignUp";
import Footer from "../../components/common/Footer";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default Accounts;
