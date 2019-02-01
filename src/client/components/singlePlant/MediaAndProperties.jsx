import React, { Component } from "react";
import Media from "./Media";
import Uses from "./Properties";

class MediaAndProperties extends Component {
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

export default MediaAndProperties;
