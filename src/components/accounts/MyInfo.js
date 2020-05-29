import React from "react";
import Card from "../common/Card";
import "../../assets/css/accounts/students/my-info.scss";

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // API로 가져와야 함
      infos: [
        {
          school: "중앙대학교",
          clubNum: "8기",
          department: "중앙멋사학과",
          name: "김중앙",
        },
      ],
      cards: [
        {
          img: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="mypage-myinfo">
        <div className="myinfo-title">나의 정보</div>
        <div className="myinfo-contents">
          {this.state.cards.map((card, i) => {
            return <Card card={card} key={i} />;
          })}
          <div className="myinfo-contents">
            {this.state.infos.map((info, i) => {
              return (
                <div>
                  {info.school}
                  {info.clubNum}
                  {info.department}
                  {info.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default MyInfo;
