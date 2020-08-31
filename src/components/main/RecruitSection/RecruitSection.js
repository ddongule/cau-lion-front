import React from "react";
import ImgSection from "../../common/basic/ImgSection";
import SectionHeader from "../../common/section/SectionHeader";

class RecruitSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Recruit CAU-LION",
      subtitles: ["중앙대학교 멋쟁이사자처럼은 언제 모집하나요?"],
      imgSrc: "props_img/recruit.png",
    };
  }

  render() {
    return (
      <div>
        <SectionHeader
          title={this.state.title}
          subtitles={this.state.subtitles}
        />
        <ImgSection imgSrc={this.state.imgSrc} key={this.state.i} />
      </div>
    );
  }
}

export default RecruitSection;
