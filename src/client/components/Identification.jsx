import React, { Component } from "react";
import "./style/Identification.css";

//where, overall appearance, details, season

class Identification extends Component {
  state = {};
  render() {
    console.log("here");
    return (
      <div className="identification">
        <div className="latin">{this.props.plant.latin}</div>
        <div className="common">{this.props.plant.common}</div>
        <div>
          <div className="title">Stem</div>
          <div>{this.props.plant.stem}</div>
          <div className="title">Leaves</div>
          <div>Shape: {this.props.plant.leaves.shape}</div>
          <div>Properties: {this.props.plant.leaves.properties.join(" ")}</div>
          <div>Margin: {this.props.plant.leaves.margin}</div>
          <div>
            Size(W x H): {this.props.plant.leaves.width}cm x
            {this.props.plant.leaves.height}cm
          </div>
          <div className="title">Flowers</div>
          <div>{this.props.plant.flowers.join(" ")}</div>
        </div>
      </div>
    );
  }
}

export default Identification;
