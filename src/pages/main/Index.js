import React from "react";
import Layout from "../../components/common/layout/Layout";
import MainSection from "../../components/main/MainSection/MainSection";
import AboutSection from "../../components/main/AboutSection/AboutSection";
import ActivitySection from "../../components/main/ActivitySection/ActivitySection";
import RecruitSection from "../../components/main/RecruitSection/RecruitSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <MainSection />
          <AboutSection />
          <ActivitySection />
          <RecruitSection />
        </Layout>
      </div>
    );
  }
}

export default Index;
