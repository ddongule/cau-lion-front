import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          로그인
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    );
  }
}

export default Login;
