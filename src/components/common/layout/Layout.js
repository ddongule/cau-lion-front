import React from "react";
import NavBar from "../nav/Navbar";
import Footer from "../footer/Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
