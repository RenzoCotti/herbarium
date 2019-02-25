import React, { Component } from "react";
import "../style/categories.css";

import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../../redux/actions";

import Categories from "../modules/Categories";
import List from "../modules/List";
import PlantDetail from "../modules/PlantDetail";

class CategoriesPage extends Component {
  state = {};

  componentWillUnmount() {
    this.props.updatePlant(undefined);
  }

  render() {
    //get state of plant/plants, render list or single detail
    let plant = this.props.plant;

    if (!plant || plant === "not found" || plant === "deleted") {
      //no plants, search
      return <Categories />;
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
)(CategoriesPage);
