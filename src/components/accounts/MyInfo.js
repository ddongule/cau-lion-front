import React from "react";
import Card from "../common/Card";
import { Link } from "react-router-dom";
import "../../assets/css/accounts/students/my-info.scss";

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // API로 가져와야 함
      info: {
        school: "중앙대학교",
        clubNum: "8기",
        department: "중앙멋사학과",
        email: "likelion@likelion.org",
        name: "김중앙",
      },
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
        <span className="myinfo-title">나의 정보</span>
        <div className="myinfo-contents">
          {this.state.cards.map((card, i) => {
            return <Card card={card} key={i} />;
          })}
          <div className="myinfo-contents-detail">
            <div className="myinfo-contents-first">
              <span className="myinfo-first-items">
                {this.state.info.school}
              </span>
              <span className="myinfo-first-items">
                {this.state.info.clubNum}
              </span>
              <span className="myinfo-first-items">{this.state.info.name}</span>
            </div>
            <div className="myinfo-contents-second">
              <span className="myinfo-second-items">
                학과 : {this.state.info.department}
              </span>
              <span className="myinfo-second-items">
                이메일 : {this.state.info.email}
              </span>
            </div>
          </div>
          <div className="myinfo-edit">
            <Link to="#" className="btn-edit">
              정보 수정
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
