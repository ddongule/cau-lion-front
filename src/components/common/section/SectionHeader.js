import React from "react";
import SectionHeaderTitle from "./SectionHeaderTitle";
import SectionHeaderSubtitle from "./SectionHeaderSubtitle";
import "../../../assets/css/common/section/_sectionheader.scss";

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="section-header">
        <SectionHeaderTitle title={this.props.title} />
        <div>
          {this.props.subtitles.map((subtitle, i) => {
            return <SectionHeaderSubtitle subtitle={subtitle} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default SectionHeader;
