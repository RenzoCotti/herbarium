import React, { Component } from "react";
import Media from "./Media";
import Properties from "./Properties";

const MediaAndProperties = props => (
  <div className="secondary-container">
    <Media plant={props.plant} />
    <Properties plant={props.plant} />
  </div>
);

export default MediaAndProperties;
