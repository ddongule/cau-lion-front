import React from "react";
import { Link } from "react-router-dom";
import API from "../../api/accountsAPI";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInfo: { username: "", password: "" } };
  }

  async login() {
    const response = await API().login({
      username: "yik1234",
      password: "password1234@",
    });
    console.log(response);
  }

  render() {
    return (
      <div>
        <Link to="/signup">회원가입</Link>
        <button onClick={this.login}>로그인</button>
      </div>
    );
  }
}

export default Login;
