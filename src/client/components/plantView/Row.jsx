import React from "react";
import { capitalise } from "../../../utility/utility";

//if toRender isnt null, render alt if is not null, otherwise render toRender
//otherwise, don't render anything

const Row = props => {
  if (props.toRender) {
    if (Array.isArray(props.toRender) && props.toRender.length === 0) return null;
    return (
      <div className="row-table" key={props.toRender}>
        <div className="label-table sub-title">{props.label}:</div>
        <div className="content-table">
          {props.alt ? capitalise(props.alt) : capitalise(props.toRender)}
        </div>
      </div>
    );
  }
  return null;
};

export default Row;
