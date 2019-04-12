import React from "react";
import { capitalise } from "../../../utility/utility";

//if toRender isnt null, render alt if is not null, otherwise render toRender
//otherwise, don't render anything

const Row = props => {
  if (props.toRender) {
    if (Array.isArray(props.toRender) && props.toRender.length === 0) return null;

    let str = "./public/images" + props.link + props.toRender + ".png";

    let leave = (e) => document.getElementById(props.toRender).style.display = "none";
    let enter = (e) => document.getElementById(props.toRender).style.display = "block";

    return (
      <div className="row-table" key={props.toRender}>
        <div className="label-table sub-title">{props.label}:</div>
        <div className={props.link ? "toggle-image content-table" : "content-table"} onMouseLeave={props.link ? leave : ""} onMouseEnter={props.link ? enter : ""}>
          {props.alt ? capitalise(props.alt) : capitalise(props.toRender)}
          {props.link ? <img className="hover-image" id={props.toRender} src={str} /> : ""}
        </div>
      </div >
    );
  }
  return null;
};

export default Row;
