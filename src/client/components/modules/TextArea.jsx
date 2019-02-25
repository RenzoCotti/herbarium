import React from "react";
import { stringOrNull } from "../../../utility/utility";

const TextArea = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <textarea
        className="forms"
        type="text"
        name={props.name}
        onChange={props.fn}
        value={stringOrNull(props.plant, props.name)}
        autoComplete="off"
      />
    </div>
  </div>
);

export default TextArea;
