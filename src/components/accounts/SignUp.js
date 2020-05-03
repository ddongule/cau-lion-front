import React from "react";
import API from "../../api/index";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInfo: { username: "", password: "" } };
  }

  async signUp() {
    const response = await API().signUp({
      username: "yik1234",
      password: "password1234@",
    });
    console.log(response);
  }

  render() {
    return (
      <div>
        <div>회원가입 페이지 입니다.</div>
        <div>
          ID: <input></input>
          PW: <input></input>
          <button onClick={this.signUp}>회원가입</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
