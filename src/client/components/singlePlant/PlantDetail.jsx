import React, { Component } from "react";

import MediaUses from "./MediaUses";
import Identification from "./Identification";
import Search from "../Search";

class PlantDetail extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setPlant = this.setPlant.bind(this);
  }

  async setPlant(plant) {
    this.setState({ plant: plant });
  }

  render() {
    if (!this.state.plant) return <Search setPlant={this.setPlant} />;
    return (
      <div className="main-container">
        <MediaUses plant={this.state.plant} />
        <Identification plant={this.state.plant} />
      </div>
    );
  }
}

export default PlantDetail;
