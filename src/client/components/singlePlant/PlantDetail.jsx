import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant } from "../../redux/actions";

import MediaUses from "./MediaUses";
import Identification from "./Identification";
import Search from "../Search";

class PlantDetail extends Component {
  render() {
    let plant = this.props.plant;
    if (!plant) return <Search />;
    return (
      <div className="main-container background">
        <MediaUses plant={plant} />
        <Identification plant={plant} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

export default connect(mapStateToProps)(PlantDetail);
