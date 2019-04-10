import React, { Component } from "react";
import MediaAndProperties from "../plantView/MediaAndProperties";
import Description from "../plantView/Description";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getPlant, updatePlant } from "../../redux/actions";

class PlantDetail extends Component {

  componentWillUnmount() {
    this.props.updatePlant(undefined);
  }

  render() {
    console.log(this.props.plant)
    if (this.props.plant === "deleted") return <div>Plant deleted.</div>;
    if (!this.props.plant) return <Redirect push to="/" />;

    return (
      <div className="plant-detail">
        <MediaAndProperties plant={this.props.plant} />
        <Description plant={this.props.plant} />
      </div>
    );
  };
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlant: id => dispatch(updatePlant(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantDetail);
