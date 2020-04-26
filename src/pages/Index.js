import React from "react";
import NavBar from "../components/common/nav/Navbar";

class Index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>메인 페이지 index입니다.</h1>
      </div>
    );
  }
}
// ReactDOM.render(<Index />, document.getElementById("root"));

export default Index;
