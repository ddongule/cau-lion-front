import React from "react";
import Button from "../../common/basic/Button";

class MyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValues: ["1주일", "1개월", "3개월", "전체"],
    };
  }

  render() {
    return (
      <div>
        나의 게시물 보기
        <div className="date-button-rows">
          {this.state.dateValues.map((dateValue, i) => {
            return <Button value={dateValue} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default MyBoard;
