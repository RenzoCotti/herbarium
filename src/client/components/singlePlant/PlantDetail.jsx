import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant } from "../../redux/actions";

import MediaUses from "./MediaUses";
import Identification from "./Identification";
import Search from "../Search";

class PlantDetail extends Component {
  render() {
    let plant = this.props.plant;
    if (!plant || plant === -1) return <Search />;
    return (
      <React.Fragment>
        <MediaUses plant={plant} />
        <Identification plant={plant} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

export default connect(mapStateToProps)(PlantDetail);
