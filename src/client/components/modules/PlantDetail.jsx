import React, { Component } from "react";
import MediaAndProperties from "../singlePlant/MediaAndProperties";
import Description from "../singlePlant/Description";

const PlantDetail = props => {
  return (
    <div className="plant-detail">
      <MediaAndProperties plant={props.plant} />
      <Description plant={props.plant} />
    </div>
  );
};

export default PlantDetail;
