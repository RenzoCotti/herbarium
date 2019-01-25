import React, { Component } from "react";
import "./style/Browse.css";
import "./style/Media.css";
import { capitalise } from "../../utility/utility";

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
    let res = await fetch("/api/list");
    let plants = await res.json();
    this.setState({ plants: plants });
  }

  getList() {
    return this.state.plants.map(plant => {
      console.log(plant);
      return (
        <div key={plant.latinName} className="entry">
          <img src={plant.images[0].url} className="secondary-image" alt="" />
          <span className="link">{capitalise(plant.commonName)}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="secondary-container">
        List of plants:
        {this.getList()}
      </div>
    );
  }
}

export default Browse;
