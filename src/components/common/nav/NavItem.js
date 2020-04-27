import React from "react";

class NavItem extends React.Component {
  render() {
    return (
      <div className="main-nav-list">
        <ul className="main-nav-box">
          <li className="main-nav-item">
            <a href={this.props.navItem.link}>{this.props.navItem.item}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavItem;
