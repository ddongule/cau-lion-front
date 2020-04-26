import React from "react";
import SectionHeader from "../common/section/SectionHeader";
import Card from "../common/Card";
import "../../assets/css/about/_activitysection.scss";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Activities We Do",
      subtitles: ["중앙대학교 멋쟁이 사자처럼은 어떤 활동들을 하나요?"],
      cards: [
        {
          img: "중앙대 세션 사진",
          category: "정기 세션 진행",
          content: "주 1회 혹은 2회씩 정기 세션을 진행합니다",
        },
        {
          img: "해커톤 사진",
          category: "중앙대 멋사 해커톤",
          content:
            "자체 해커톤을 통해 실제 서비스를 구현하고 협업을 경험해봅니다",
        },
        {
          img: "회식 사진",
          category: "친목 모임",
          content: "멋쟁이 사자처럼 동아리원들과의 친목을 다집니다",
        },
        {
          img: "연합 세션 사진",
          category: "연합 세션 진행",
          content: "다른 학교와의 연합 세션을 통해 통찰력을 높입니다",
        },
        {
          img: "전체 해커톤 사진",
          category: "전체 해커톤",
          content:
            "전체 해커톤을 통해 전국 멋사인들과 아이디어 및 서비스를 공유합니다",
        },
        {
          img: "엠티 사진",
          category: "중앙대 멋사 MT",
          content: "MT를 통해 동아리원들과의 즐거운 추억을 쌓습니다",
        },
      ],
    };
  }

  render() {
    return (
      <div className="activity-section">
        <SectionHeader
          title={this.state.title}
          subtitles={this.state.subtitles}
        />
        <div className="activity-section-cards">
          {this.state.cards.map((card, i) => {
            return <Card card={card} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default Activity;
