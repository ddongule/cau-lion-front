import React from "react";

class NavItem extends React.Component {
  getNavItems = () => {
    const navItem = [
      { id: 0, item: "활동일정", link: "#" },
      { id: 1, item: "기술블로그", link: "#" },
      { id: 2, item: "포트폴리오", link: "#" },
      { id: 3, item: "로그인", link: "#" },
    ];
    return navItem;
  };
  state = {
    navItems: this.getNavItems(),
  };

  render() {
    return (
      <div className="main-nav-list">
        <ul className="main-nav-box">
          {this.state.navItems.map((nav) => (
            <li className="main-nav-item">
              <a href={nav.link}>{nav.item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavItem;
