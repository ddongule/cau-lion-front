import React from "react";
import Layout from "../../../components/common/layout/Layout";
import SideNavbar from "../../../components/common/nav/SideNavbar";
import MyBoard from "../../../components/accounts/MyBoard";
import "../../../assets/css/accounts/students/my-page.scss";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <SideNavbar />
          <MyBoard />
        </Layout>
      </div>
    );
  }
}

export default Accounts;
