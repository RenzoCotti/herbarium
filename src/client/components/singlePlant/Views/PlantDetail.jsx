import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../../../redux/actions";

import MediaAndProperties from "../MediaAndProperties";
import Description from "../Description";
import Search from "./Search";
import List from "../../List";

class PlantDetail extends Component {
  componentWillUnmount() {
    this.props.updatePlant(-1);
  }

  render() {
    let plant = this.props.plant;
    if (!plant || plant === -1) {
      //no plants, search
      return <Search />;
    } else if (plant.length === 1) {
      //one plant selected
      return (
        <React.Fragment>
          <MediaAndProperties plant={plant[0]} />
          <Description plant={plant[0]} />
        </React.Fragment>
      );
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
  updatePlant: () => dispatch(updatePlantAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantDetail);
