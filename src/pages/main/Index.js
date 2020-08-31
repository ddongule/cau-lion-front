import React from "react";
import Layout from "../../components/common/layout/Layout";
import MainSection from "../../components/about/MainSection";
import IntroSection from "../../components/about/IntroSection";
import ActivitySection from "../../components/about/ActivitySection";
import RecruitSection from "../../components/about/RecruitSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <MainSection />
          <IntroSection />
          <ActivitySection />
          <RecruitSection />
        </Layout>
      </div>
    );
  }
}

export default Index;
