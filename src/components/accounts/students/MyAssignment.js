import React from "react";
import Card from "../../common/basic/Card";
import "./my-assignment.scss";

class MyAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          thumbnail: "",
        },
        {
          thumbnail: "",
        },
        {
          thumbnail: "",
        },
        {
          thumbnail: "",
        },
        {
          thumbnail: "",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        나의 과제 페이지 임다
        {this.state.cards.map((card, i) => {
          return <Card card={card} key={i} />;
        })}
      </div>
    );
  }
}
export default MyAssignment;
