import React from "react";
import { Link } from "react-router-dom";
import API from "../../api/accountsAPI";
import "../../assets/css/accounts/signup.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isEmailValid: false };
  }

  async login(loginInfo) {
    const response = await API().login(loginInfo);
    console.log(response);
    if (response.data.httpStatus === "OK") {
      alert("로그인 성공", response.data);
    } else if (response.data.httpStatus === "BAD_REQUEST") {
      alert("아이디와 비밀번호가 올바르지 않습니다.");
    } else if (response.data.httpStatus === "UNAUTHORIZED") {
      alert("계정이 활성화되지 않았습니다. 운영자에게 문의해주세요.");
    }
  }

  validateEmail = (email) => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

    if (email.match(emailRegExp)) {
      this.setState({
        isEmailValid: true,
        email,
      });
    } else {
      this.setState({
        isEmailValid: false,
        email,
      });
    }
  };

  handlePasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }

  renderSubmitBtn = () => {
    if (this.state.isEmailValid) {
      return (
        <button
          type="button"
          onClick={() => this.login(this.state)}
          className="accounts-btn"
        >
          로그인
        </button>
      );
    }

    return (
      <button type="button" className="accounts-invalid-btn" disabled>
        로그인
      </button>
    );
  };

  render() {
    return (
      <div className="accounts-container">
        <p className="accounts-title">로그인</p>
        <form>
          <div className="accounts-input-section">
            <input
              type="email"
              className="accounts-input"
              placeholder="이메일"
              autoFocus
              required
              onChange={(e) => this.validateEmail(e.target.value)}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="password"
              className="accounts-input"
              placeholder="비밀번호"
              required
              onChange={(e) => this.handlePasswordInput(e.target.value)}
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
          {this.renderSubmitBtn()}
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
