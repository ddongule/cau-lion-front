import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../main/Index";
import Login from "../accounts/login/Login";
import Signup from "../accounts/signup/Signup";
import MyPage from "../accounts/students/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mypage" component={MyPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
