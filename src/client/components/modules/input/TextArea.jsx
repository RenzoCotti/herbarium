import React from "react";
import { stringOrEmpty } from "../../../../utility/utility";

const TextArea = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  // let val = temp && isNaN(temp) ? capitalise(temp) : temp;

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <textarea
          className="textArea"
          type="text"
          name={props.name}
          onChange={props.fn}
          value={temp}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default TextArea;
