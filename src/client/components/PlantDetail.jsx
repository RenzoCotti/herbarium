import React, { Component } from "react";

import Media from "./Media";
import Information from "./Information";

class PlantDetail extends Component {
  state = {};

  componentDidMount() {
    this.getPlant();
  }

  async getPlant() {
    let res = await fetch("/api/plant");
    let plant = await res.json();
    this.setState({ plant: plant[0] });
  }

  render() {
    if (!this.state.plant) return <div />;
    return (
      <div className="main-container">
        <Media plant={this.state.plant} />
        <Information plant={this.state.plant} />
      </div>
    );
  }
}

export default PlantDetail;
