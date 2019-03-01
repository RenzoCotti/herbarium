import React from "react";
import MediaAndProperties from "../singlePlant/MediaAndProperties";
import Description from "../singlePlant/Description";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getPlant } from "../../redux/actions";

const PlantDetail = props => {
  if (!props.plant) return <Redirect push to="/" />;

  return (
    <div className="plant-detail">
      <MediaAndProperties plant={props.plant[0]} />
      <Description plant={props.plant[0]} />
    </div>
  );
};

const mapStateToProps = state => ({
  plant: getPlant(state)
});

export default connect(
  mapStateToProps,
  null
)(PlantDetail);
