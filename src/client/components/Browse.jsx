import React, { Component } from "react";
import { Redirect } from "react-router";
import { capitalise } from "../../utility/utility";

import "./style/Browse.css";
import "./style/Media.css";

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

  async goToPlant(e, i) {
    //render plant, maybe push it to the parent?
    this.setState({ plant: this.state.plants[i] });
  }

  getList() {
    return this.state.plants.map((plant, index) => {
      console.log(plant);
      return (
        <div
          key={plant.latinName}
          className="entry"
          onClick={e => this.goToPlant(e, index)}
        >
          <img src={plant.images[0].url} className="secondary-image" alt="" />
          <span className="link">{capitalise(plant.commonName)}</span>
        </div>
      );
    });
  }

  render() {
    if (this.state.plant)
      return <Redirect push to={"/plant/" + this.state.plant.commonName} />;
    return (
      <div className="secondary-container background">
        List of plants:
        {this.getList()}
      </div>
    );
  }
}

export default Browse;
