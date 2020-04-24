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
          <img src={temp} />
        </div>
        <div className="main-nav-list">
          <ul className="main-nav-box">
            <li className="main-nav-item">활동 일정</li>
            <li className="main-nav-item">기술 블로그</li>
            <li className="main-nav-item">포트폴리오</li>
            <li className="main-nav-item">로그인</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
