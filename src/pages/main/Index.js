import React from "react";
import Layout from "../../components/common/layout/Layout";
import ImgSection from "../../components/common/ImgSection";
import IntroSection from "../../components/about/IntroSection";
import ActivitySection from "../../components/about/ActivitySection";
import RecruitSection from "../../components/about/RecruitSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <ImgSection />
          <IntroSection />
          <ActivitySection />
          <RecruitSection />
        </Layout>
      </div>
    );
  }
}

export default Index;
