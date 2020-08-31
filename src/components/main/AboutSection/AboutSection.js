import React from "react";
import SectionHeader from "../../common/section/SectionHeader";
import Card from "../../common/basic/Card";
import "./about-section.scss";

class AboutSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About CAU-LION",
      subtitles: ["중앙대학교 멋쟁이 사자처럼은 어떤 동아리인가요?"],
      cards: [
        {
          category: "Vision",
          content: "비전공자도 서비스를 직접 개발한다",
        },
        {
          category: "Activity",
          content: "체계적인 웹 개발 세션 및 해커톤",
        },
        {
          category: "Achievement",
          content: "나만의 아이디어를 직접 실현한다",
        },
      ],
    };
  }

  render() {
    return (
      <div className="about-section">
        <SectionHeader
          title={this.state.title}
          subtitles={this.state.subtitles}
        />
        <div className="about-section-cards">
          {this.state.cards.map((card, i) => {
            return <Card card={card} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default AboutSection;
