import React from "react";
import { Link } from "react-router-dom";
// import API from "../../api/index";
import "../../assets/css/accounts/signup.scss";
import API from "../../api/index";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEmailValid: false,
      password: "",
      confirmPassword: "",
      name: "",
      isNameValid: false,
      department: "",
      isDepartmentValid: false,
      phoneNumber: "",
      isPhoneNumberValid: false,
    };
  }
  inputClassNameHelper = boolean => {
    switch (boolean) {
      case true:
        return 'is-valid';
      case false:
        return 'is-invalid';
      default:
        return '';
    }
  };

  isEveryFieldValid = () => {
    const { isEmailValid, isNameValid, isDepartmentValid, isPhoneNumberValid } = this.state;
    return isEmailValid && isNameValid && isDepartmentValid && isPhoneNumberValid;
  }
  renderSubmitBtn = () => {
    if (this.isEveryFieldValid()) {
      return (
        <button
          onClick={() => this.signUp(this.state)}
          className="accounts-btn"
        >
          회원가입
        </button>
      )
    } 
  
    return (
      <button
        onClick={() => this.signUp(this.state)}
        className="accounts-invalid-btn"
        disabled
      >
        회원가입
      </button>
    )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlePasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }
  handlePasswordConfirmInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput });
  }
  doesPasswordMatch() {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  }
  confirmPasswordClassName() {
    const { confirmPassword } = this.state;
    if (confirmPassword) {
      return this.doesPasswordMatch() ? "is-valid" : "is-invalid";
    }
  }
  renderFeedbackMessage() {
    const { confirmPassword } = this.state;
    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">패스워드가 일치하지 않습니다.</div>
        );
      }
    }
  }
  validateName = name => {
    if (name.length > 1) {
      this.setState({
        isNameValid: true,
        name
      });
    } else {
      this.setState({
        isNameValid: false,
        name
      });
    }
  };

  isEnteredNameValid = () => {
    const { name, isNameValid } = this.state;
    if (name) return isNameValid;
  };

  validateDepartment = department => {
    const departmentRegExp = /^[가-힣]+학과$/;
    if (department.match(departmentRegExp)) {
      this.setState({
        isDepartmentValid: true,
        department
      });
    } else {
      this.setState({
        isDepartmentValid: false,
        department
      });
    }
  };

  isEnteredDepartmentValid = () => {
    const { department, isDepartmentValid } = this.state;
    if (department) return isDepartmentValid;
  };


  validateEmail = email => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

    if (email.match(emailRegExp)) {
      this.setState({
        isEmailValid: true,
        email
      });
    } else {
      this.setState({
        isEmailValid: false,
        email
      });
    }
  };

  isEnteredEmailValid = () => {
    const { email, isEmailValid } = this.state;

    if (email) return isEmailValid;
  };

  validatePhoneNumber = phoneNumberInput => {
    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

    if (phoneNumberInput.match(phoneNumberRegExp)) {
      this.setState({
        isPhoneNumberValid: true,
        phoneNumber: phoneNumberInput
      });
    } else {
      this.setState({
        isPhoneNumberValid: false,
        phoneNumber: phoneNumberInput
      });
    }
  };

  isEnteredPhoneNumberValid = () => {
    const { phoneNumber, isPhoneNumberValid } = this.state;

    if (phoneNumber) return isPhoneNumberValid;
  };

  async signUp(userInfo) {
    const response = await API().signUp(userInfo);
    console.log(response);
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
              className={`accounts-input ${this.inputClassNameHelper(this.isEnteredEmailValid())}`}
              placeholder="이메일"
              autoFocus
              required
              autoComplete="off"
              onChange={e => this.validateEmail(e.target.value)}
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
              className={`accounts-input ${this.confirmPasswordClassName()}`}
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
              className={`accounts-input ${this.inputClassNameHelper(this.isEnteredNameValid())}`}
              placeholder="이름"
              required
              autoComplete="off"
              onChange={e => this.validateName(e.target.value)}
              value={this.state.name}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="text"
              name="department"
              className={`accounts-input ${this.inputClassNameHelper(this.isEnteredDepartmentValid())}`}
              placeholder="중앙멋사학과"
              required
              autoComplete="off"
              onChange={e => this.validateDepartment(e.target.value)}
              value={this.state.department}
            />
          </div>
          <div className="accounts-input-section">
            <input
              type="tel"
              name="phoneNumber"
              className={`accounts-input ${this.inputClassNameHelper(this.isEnteredPhoneNumberValid())}`}
              placeholder="전화번호(010-0000-0000)"
              required
              autoComplete="off"
              onChange={e => this.validatePhoneNumber(e.target.value)}
              value={this.state.phoneNumber}
            />
          </div>
          {this.renderSubmitBtn()}
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
