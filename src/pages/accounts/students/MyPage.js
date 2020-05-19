import React from "react";
import Layout from "../../../components/common/layout/Layout";
import SideNavbar from "../../../components/common/nav/SideNavbar";
import "../../../assets/css/accounts/students/mypage.scss";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <SideNavbar />
        </Layout>
      </div>
    );
  }
}

export default Accounts;
