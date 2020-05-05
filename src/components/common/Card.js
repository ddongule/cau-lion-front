import React from "react";
import "../../assets/css/common/card.scss";

class Card extends React.Component {
  render() {
    const imgStyle = {
      backgroundImage: `url(${this.props.card.imgSrc})`,
      backgroundSize: "contain",
    };

    return (
      <div className="card" style={imgStyle}>
        <h1 className="card-content">{this.props.card.content}</h1>
        <h1 className="card-category">{this.props.card.category}</h1>
      </div>
    );
  }
}

export default Card;
