import React from "react";
import temp from "../../assets/img/temp.png";
import "../../assets/css/common/_imgsection.scss";

class ImgSection extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={temp} />
      </div>
    );
  }
}

export default ImgSection;
