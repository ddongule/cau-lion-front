import React from "react";
import { Link } from "react-router-dom";

class SideNavItem extends React.Component {
  render() {
    return (
      <li className="side-nav-item">
        <Link to={this.props.sideNavItem.link}>
          {this.props.sideNavItem.item}
        </Link>
      </li>
    );
  }
}

export default SideNavItem;
