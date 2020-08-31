import React from "react";
import { Link } from "react-router-dom";
import API from "../../api/accountsAPI";
import "../../assets/css/accounts/sign-up.scss";

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
      <div className="accounts-container">
        <p className="accounts-title">로그인</p>
        <form>
          <div className="accounts-input-section">
            <input
              type="email"
              className="accounts-input"
              placeholder="Email"
              autoFocus
              required
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="password"
              className="accounts-input"
              placeholder="Password"
              required
            />
          </div>
          <div className="accounts-remember-pw">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">
              <span className="remember-outside">
                <span className="remember-inside"></span>
              </span>
              Remember me?
            </label>
            <Link to="#" className="accounts-password-reset">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <button
            onClick={() => this.login(this.state)}
            className="accounts-btn"
          >
            로그인
          </button>
          <div className="signup-have-no-accounts">
            <p>계정이 없으신가요?</p>
            <Link to="/signup" className="signup-or-login">
              회원가입 하기
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
