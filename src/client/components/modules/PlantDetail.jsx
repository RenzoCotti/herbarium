import React, { Component } from "react";
import Description from "../plantView/Description";
import Header from "../plantView/Header";
import Media from "../plantView/Media";
import Properties from "../plantView/Properties";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getPlant, updatePlant } from "../../redux/actions";



class PlantDetail extends Component {

  componentWillUnmount() {
    this.props.updatePlant(undefined);
  }

  render() {
    if (this.props.plant === "deleted") return <div>Plant deleted.</div>;
    if (!this.props.plant) return <Redirect push to="/" />;

    return (
      <div className="plant-detail">
        <Header plant={this.props.plant} />
        <Media plant={this.props.plant} />
        <Description plant={this.props.plant} />
        <Properties plant={this.props.plant} />
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
