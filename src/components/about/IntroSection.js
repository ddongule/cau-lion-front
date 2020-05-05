import React from "react";
import SectionHeader from "../common/section/SectionHeader";
import Card from "../common/Card";
import "../../assets/css/about/intro-section.scss";

class IntroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About CAU-LION",
      subtitles: ["중앙대학교 멋쟁이 사자처럼은 어떤 동아리인가요?"],
      cards: [
        {
          category: "Vision",
          content: "동아리 비전",
        },
        {
          category: "Activity",
          content: "동아리 활동",
        },
        {
          category: "Achievement",
          content: "동아리 목표",
        },
      ],
    };
  }

  render() {
    return (
      <div className="intro-section">
        <SectionHeader
          title={this.state.title}
          subtitles={this.state.subtitles}
        />
        <div className="intro-section-cards">
          {this.state.cards.map((card, i) => {
            return <Card card={card} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default IntroSection;
