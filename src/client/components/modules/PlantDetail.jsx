import React from "react";
import MediaAndProperties from "../singlePlant/MediaAndProperties";
import Description from "../singlePlant/Description";

const PlantDetail = props => (
  <div className="plant-detail">
    <MediaAndProperties plant={props.plant} />
    <Description plant={props.plant} />
  </div>
);

export default PlantDetail;
