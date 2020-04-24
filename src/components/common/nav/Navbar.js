import React from "react";
import "../../../assets/css/common/base/Base.scss";
import "../../../assets/css/common/nav/Navbar.scss";
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
        <div className="main-nav-list">
          <ul className="main-nav-box">
            <li className="main-nav-item">
              <a href="#">활동 일정</a>
            </li>
            <li className="main-nav-item">
              <a href="#">기술 블로그</a>
            </li>
            <li className="main-nav-item">
              <a href="#">포트폴리오</a>
            </li>
            <li className="main-nav-item">
              <a href="#">로그인</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
