import React from "react";
import "../../assets/css/common/card.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h1 className="card-content">{this.props.card.content}</h1>
        <h1 className="card-category">{this.props.card.category}</h1>
      </div>
    );
  }
}

export default Card;
