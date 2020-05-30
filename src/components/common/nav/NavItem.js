import React from "react";

class NavItem extends React.Component {
  render() {
    return (
      <li className="main-nav-item">
        <a href={this.props.navItem.link}>{this.props.navItem.item}</a>
      </li>
    );
  }
}

export default NavItem;
