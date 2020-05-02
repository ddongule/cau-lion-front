import React from "react";
import ImgSection from "../../components/common/ImgSection";
import IntroSection from "../../components/about/IntroSection";
import ActivitySection from "../../components/about/ActivitySection";
import RecruitSection from "../../components/about/RecruitSection";
import Footer from "../../components/common/Footer";

class Index extends React.Component {
  render() {
    return (
      <div>
        <ImgSection />
        <IntroSection />
        <ActivitySection />
        <RecruitSection />
        <Footer />
      </div>
    );
  }
}

export default Index;
