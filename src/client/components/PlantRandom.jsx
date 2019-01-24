import React, { Component } from "react";

import Media from "./Media";
import Information from "./Information";

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
        <div className="rand" onClick={this.getPlant}>
          Another one
        </div>
        <div className="main-container">
          <Media plant={this.state.plant} />
          <Information plant={this.state.plant} />
        </div>
      </React.Fragment>
    );
  }
}

export default PlantRandom;
