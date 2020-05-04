import React from "react";
import { Link } from "react-router-dom";
// import API from "../../api/index";
import "../../assets/css/accounts/signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      department: "",
      phone_number: "",
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };
  handlePasswordInput(passwordInput) {
    this.setState({password:passwordInput});
  }
  handlePasswordConfirmInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput});
  }
  doesPasswordMatch() {
    const {password, confirmPassword} = this.state;
    return password===confirmPassword;
  }
  confirmPasswords() {
    const {confirmPassword} = this.state;
    if (confirmPassword) {
      return this.doesPasswordMatch() ? "is-valid" : "is-invalid";
    }
  }
  renderFeedbackMessage() {
    const {confirmPassword} = this.state;
    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">패스워드가 일치하지 않습니다.</div>
        )
      }
    }
  }
  render() {
    return (
      <div className="accounts-container">
        <p className="accounts-title">회원가입</p>
        <form>
          <div className="accounts-input-section">
            <input
              type="email"
              name="email"
              className="accounts-input"
              placeholder="이메일"
              autoFocus
              required
              autoComplete="off"
              pattern="\S+"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="password"
              minLength="6"
              name="password"
              className="accounts-input"
              placeholder="비밀번호"
              required
              autoComplete="off"
              onChange={e => this.handlePasswordInput(e.target.value)}
              value={this.state.password}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="password"
              minLength="6"
              name="password_confirmation"
              className="accounts-input"
              placeholder="비밀번호 확인"
              required
              autoComplete="off"
              onChange={e => this.handlePasswordConfirmInput(e.target.value)}
              value={this.state.password_confirmation}
            />
            {this.renderFeedbackMessage()}
          </div>
          <div className="accounts-input-section">
            <input
              type="text"
              name="name"
              className="accounts-input"
              placeholder="이름"
              required
              autoComplete="off"
              pattern="\S+"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="text"
              name="department"
              className="accounts-input"
              placeholder="학과"
              required
              autoComplete="off"
              pattern="\S+"
              onChange={this.handleChange}
              value={this.state.department}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="tel"
              name="phone_number"
              className="accounts-input"
              placeholder="전화번호(010-0000-0000)"
              required
              autoComplete="off"
              pattern="^0[0-9][0-9]-[0-9]*-[0-9]*$"
              onChange={this.handleChange}
              value={this.state.phone_number}
            />
          </div>
          <button onClick={this.signUp} className="accounts-btn">
            회원가입
          </button>
          <div className="signup-have-accounts">
            <p>계정이 있으신가요?</p>
            <Link to="/login" className="signup-or-login">
              로그인 하기
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
