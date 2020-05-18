import React from "react";
import ImageSection from "../common/ImgSection";
import SectionHeader from "../common/section/SectionHeader";

class RecruitSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Recruit CAU-LION",
      subtitles: ["중앙대학교 멋쟁이사자처럼은 언제 모집하나요?"],
    };
  }

  render() {
    return (
      <div>
        <SectionHeader
          title={this.state.title}
          subtitles={this.state.subtitles}
        />
        <ImageSection />
      </div>
    );
  }
}

export default RecruitSection;
