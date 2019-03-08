import React from "react";
import { stringOrNull } from "../../../utility/utility";

const Input = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <input
        className={props.text ? "forms shortForm" : "forms"}
        type={props.password ? "password" : "text"}
        name={props.name}
        onChange={props.fn}
        value={stringOrNull(props.plant, props.name)}
        autoComplete="off"
      />
      {props.text ? props.text : ""}
    </div>
  </div>
);

export default Input;
