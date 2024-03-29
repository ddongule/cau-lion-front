import React from "react";
import ImgSection from "../../common/basic/ImgSection";
import "./main-section.scss";

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "props_img/main-image.png",
    };
  }

  render() {
    return (
      <div className="main-image">
        <ImgSection imgSrc={this.state.imgSrc} key={this.state.i} />
      </div>
    );
  }
}

export default MainSection;
