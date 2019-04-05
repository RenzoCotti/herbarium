import React from "react";
import { stringOrEmpty } from "../../../../utility/utility";

const TextArea = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <textarea
        className="textArea"
        type="text"
        name={props.name}
        onChange={props.fn}
        value={stringOrEmpty(props.obj, props.name)}
        autoComplete="off"
      />
    </div>
  </div>
);

export default TextArea;
