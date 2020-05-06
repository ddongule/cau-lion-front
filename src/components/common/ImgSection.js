import React from "react";
// import temp from "../../assets/img/temp.png";
import "../../assets/css/common/img-section.scss";

class ImgSection extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}

export default ImgSection;
