import React, { Component } from "react";
import Media from "./Media";
import Uses from "./Uses";

class MediaUses extends Component {
  state = {};
  render() {
    return (
      <div className="secondary-container">
        <Media plant={this.props.plant} />
        <Uses plant={this.props.plant} />
      </div>
    );
  }
}

export default MediaUses;
