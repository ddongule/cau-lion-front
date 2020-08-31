import React from "react";
import Layout from "../../../components/common/layout/Layout";
import Signup from "../../../components/accounts/signup/Signup";

class Accounts extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Signup />
        </Layout>
      </div>
    );
  }
}

export default Accounts;
