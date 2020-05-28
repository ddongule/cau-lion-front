import React from "react";
import Card from "../common/Card";
import "../../assets/css/accounts/students/my-info.scss";

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "중앙대학교",
      clubNum: "8기",
      department: "중앙멋사학과",
      name: "김중앙",
      cards: [
        {
          myImgUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="mypage-myinfo">
        <div className="myinfo-title">나의 정보</div>
        {this.state.cards.map((card, i) => {
          return <Card card={card} key={i} />;
        })}
        <div className="myinfo-contents">
          {this.state.school}
          {this.state.clubNum}
          {this.state.department}
          {this.state.name}
        </div>
      </div>
    );
  }
}
export default MyInfo;
