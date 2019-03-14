import React, { Component } from "react";
import Media from "./Media";
import Uses from "./Properties";

const MediaAndProperties = props => (
  <div className="secondary-container">
    <Media plant={props.plant} />
    <Uses plant={props.plant} />
  </div>
);

export default MediaAndProperties;
