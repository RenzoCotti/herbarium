import React, { Component } from "react";

import MediaUses from "./MediaUses";
import Identification from "./Identification";

class PlantRandom extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.getPlant = this.getPlant.bind(this);
  }

  componentDidMount() {
    this.getPlant();
  }

  async getPlant() {
    let res = await fetch("/api/random");
    let plant = await res.json();

    this.setState({ plant: plant });
  }

  render() {
    if (!this.state.plant) return <div />;
    return (
      <React.Fragment>
        <div className="button" onClick={this.getPlant}>
          Another one
        </div>
        <MediaUses plant={this.state.plant} />
        <Identification plant={this.state.plant} />
      </React.Fragment>
    );
  }
}

export default PlantRandom;
