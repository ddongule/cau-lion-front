import React from "react";
import "./img-section.scss";

class ImgSection extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={this.props.imgSrc} alt="" />
      </div>
    );
  }
}

export default ImgSection;
