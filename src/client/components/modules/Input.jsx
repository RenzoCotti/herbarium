import React from "react";
import { stringOrEmpty } from "../../../utility/utility";

/**
 * input text field
 *
 * label is the text that gets displayed on the left
 * text is the aftertext for short fields
 * name is the API name of the plant field we're editing
 * fn is the change function
 * obj is the optional obj to prefill the value (if obj, we do obj[name], else "")
 * */

const Input = props => (
  <div className="row-table">
    {props.label ? (
      <div className="label-table sub-title">{props.label}</div>
    ) : (
      ""
    )}
    <div className="content-table">
      <input
        className={props.text ? "input shortForm" : "input"}
        type={props.password ? "password" : "text"}
        name={props.name}
        onChange={props.fn}
        value={stringOrEmpty(props.obj, props.name)}
        autoComplete="off"
      />
      {props.text ? props.text : ""}
    </div>
  </div>
);

export default Input;
