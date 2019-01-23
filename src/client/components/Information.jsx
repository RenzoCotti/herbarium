import React, { Component } from "react";
import Identification from "./Identification";
// import Properties from "./Properties";

class Information extends Component {
  state = {};

  render() {
    return (
      <div>
        <Identification plant={this.props.plant} />
      </div>
    );
  }
}

export default Information;
