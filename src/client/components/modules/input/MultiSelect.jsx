import React from "react";
import { capitalise, arrOrEmpty } from "../../../../utility/utility";

const MultiSelect = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <select
        onChange={val => props.fn(val, props.name, true)}
        multiple
        value={arrOrEmpty(props.obj, props.name)}
      >
        {props.arr.map(o => (
          <option value={o} key={o}>
            {capitalise(o)}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default MultiSelect;
