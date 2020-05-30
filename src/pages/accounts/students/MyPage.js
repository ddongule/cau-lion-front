import React from "react";
import Layout from "../../../components/common/layout/Layout";
import SideNavbar from "../../../components/common/nav/SideNavbar";
import MyBoard from "../../../components/accounts/MyBoard";
import MyInfo from "../../../components/accounts/MyInfo";
import MyAssignment from "../../../components/accounts/MyAssignment";
import "../../../assets/css/accounts/students/my-page.scss";

class Accounts extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mypage-container">
          <SideNavbar />
          <div className="mypage-contents">
            <div className="mypage-title">마이페이지</div>
            <MyInfo />
            <MyAssignment />
            <MyBoard />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Accounts;
