import React from "react";
import NavItem from "./NavItem";
import "../../../assets/css/common/base/_base.scss";
import "../../../assets/css/common/nav/_navbar.scss";
import temp from "../../../assets/img/temp.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-logo">
          {/* temporary logo */}
          <a href="#">
            <img src={temp} />
          </a>
        </div>
        <NavItem />
      </div>
    );
  }
}

export default NavBar;
