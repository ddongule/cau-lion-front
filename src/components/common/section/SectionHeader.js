import React from "react";
import SectionHeaderTitle from "./SectionHeaderTitle";
import SectionHeaderSubtitle from "./SectionHeaderSubtitle";
import "./section-header.scss";

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="section-header">
        <SectionHeaderTitle title={this.props.title} />
        {this.props.subtitles.map((subtitle, i) => {
          return <SectionHeaderSubtitle subtitle={subtitle} key={i} />;
        })}
      </div>
    );
  }
}

export default SectionHeader;
