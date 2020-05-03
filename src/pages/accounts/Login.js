import React from "react";
import Layout from "../../components/common/layout/Layout";
import Login from "../../components/accounts/Login";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Login />
        </Layout>
      </div>
    );
  }
}

export default Accounts;
