import React from "react";
import NavBar from "../../components/common/nav/Navbar";
import ImgSection from "../../components/common/ImgSection";
import RecruitSection from "../../components/about/RecruitSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ImgSection />
        <RecruitSection />
        <h1>index 입니다.</h1>
      </div>
    );
  }
}

export default Index;
