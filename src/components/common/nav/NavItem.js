import React from "react";

class NavItem extends React.Component {
  render() {
    return (
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
    );
  }
}

export default NavItem;
