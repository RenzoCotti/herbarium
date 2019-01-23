import React, { Component } from "react";
import "./style/Browse.css";

class Browse extends Component {
  state = { plants: [] };
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getPlants();
  }

  async getPlants() {
    let res = await fetch("/plants");
    let plants = await res.json();
    this.setState({ plants: plants });
  }

  getList() {
    return this.state.plants.map(plant => (
      <div className="link" key={plant.latin}>
        {plant.common}
      </div>
    ));
  }

  render() {
    return (
      <div className="list">
        List of plants:
        {this.getList()}
      </div>
    );
  }
}

export default Browse;
