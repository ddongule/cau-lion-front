import React from "react";
import Layout from "../../components/common/layout/Layout";
import SignUp from "../../components/accounts/SignUp";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <SignUp />
        </Layout>
      </div>
    );
  }
}

export default Accounts;
