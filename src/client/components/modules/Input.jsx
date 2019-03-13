import React from "react";
import { stringOrEmpty } from "../../../utility/utility";

/**
 * input text field
 *
 * label is the text that gets displayed on the left
 * text is the aftertext for short fields
 * name is the API name of the plant field we're editing
 * fn is the change function
 * */

const Input = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <input
        className={props.text ? "forms shortForm" : "forms"}
        type={props.password ? "password" : "text"}
        name={props.name}
        onChange={props.fn}
        value={stringOrEmpty(props.plant, props.name)}
        autoComplete="off"
      />
      {props.text ? props.text : ""}
    </div>
  </div>
);

export default Input;
