import React from "react";
import NavItem from "./NavItem";
import "../../../assets/css/common/base/base.scss";
import "../../../assets/css/common/nav/navbar.scss";
import lion from "../../../assets/img/lion.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          item: "활동일정",
          link: "#",
        },
        {
          item: "기술블로그",
          link: "#",
        },
        {
          item: "포트폴리오",
          link: "#",
        },
        {
          item: "로그인",
          link: "#",
        },
      ],
    };
  }
  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-logo">
          {/* temporary logo */}
          <a href="#">
            <img src={lion} className="logo" />
          </a>
        </div>
        <div className="main-nav-list">
          <ul className="main-nav-box">
            {this.state.navItems.map((navItem, i) => {
              return <NavItem navItem={navItem} key={i} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
