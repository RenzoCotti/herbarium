import React, { Component } from "react";
import "./style/categories.css";

import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../redux/actions";

import Categories from "./Categories";
import MediaAndProperties from "./singlePlant/MediaAndProperties";
import Description from "./singlePlant/Description";
import List from "./List";

class CategoriesPage extends Component {
  state = {};

  componentWillUnmount() {
    this.props.updatePlant(-1);
  }

  render() {
    //get state of plant/plants, render list or single detail
    let plant = this.props.plant;

    console.log(plant);
    if (!plant || plant === -1) {
      //no plants, search
      return <Categories />;
    } else if (plant.length === 1) {
      //one plant selected
      return (
        <React.Fragment>
          <MediaAndProperties plant={plant[0]} />
          <Description plant={plant[0]} />
        </React.Fragment>
      );
    } else {
      console.log("here");
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
