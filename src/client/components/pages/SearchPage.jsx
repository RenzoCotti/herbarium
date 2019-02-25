import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../../redux/actions";

import Search from "../modules/Search";
import List from "../modules/List";
import PlantDetail from "../modules/PlantDetail";

class SearchPage extends Component {
  componentWillUnmount() {
    this.props.updatePlant(undefined);
  }

  render() {
    let plant = this.props.plant;
    if (!plant || plant === "not found") {
      //no plants, search
      return <Search />;
    } else if (plant === "deleted") {
      //one plant selected
      return <div className="secondary-container">Plant deleted.</div>;
    } else if (plant.length === 1) {
      //one plant selected
      return <PlantDetail plant={plant[0]} />;
    } else {
      //list of plants
      return <List />;
    }
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlantAction(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
