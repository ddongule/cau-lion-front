import React from "react";
import NavBar from "../../components/common/nav/Navbar";
import ImgSection from "../../components/common/ImgSection";
import RecruitSection from "../../components/about/RecruitSection";
import IntroSection from "../../components/about/IntroSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ImgSection />
        <IntroSection />
        <RecruitSection />
      </div>
    );
  }
}

export default Index;
