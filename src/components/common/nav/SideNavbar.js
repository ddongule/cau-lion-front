import React from "react";
import SideNavItem from "./SideNavItem";

class SideNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavItems: [
        {
          item: "마이페이지",
          link: "/mypage",
        },
        {
          item: "자유게시판",
          link: "#",
        },
        {
          item: "공지게시판",
          link: "#",
        },
        {
          item: "과제제출",
          link: "#",
        },
      ],
    };
  }

  render() {
    return (
      <div className="mypage-sidebar">
        <ul className="sidebar-menu">
          {this.state.sideNavItems.map((sideNavItem, i) => {
            return <SideNavItem sideNavItem={sideNavItem} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SideNavbar;
