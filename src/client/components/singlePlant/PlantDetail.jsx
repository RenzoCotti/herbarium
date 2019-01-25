import React, { Component } from "react";

import MediaUses from "./MediaUses";
import Identification from "./Identification";

class PlantDetail extends Component {
  state = {};

  componentDidMount() {
    this.getPlant();
  }

  async getPlant() {
    let res = await fetch("/api/plant");
    let plant = await res.json();
    this.setState({ plant: plant });
  }

  render() {
    if (!this.state.plant) return <div />;
    return (
      <div className="main-container">
        <MediaUses plant={this.state.plant} />
        <Identification plant={this.state.plant} />
      </div>
    );
  }
}

export default PlantDetail;
