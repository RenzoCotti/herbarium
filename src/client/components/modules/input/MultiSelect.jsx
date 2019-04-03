import React from "react";
import { capitalise, arrOrEmpty } from "../../../../utility/utility";
import { Select } from "react-materialize";

const MultiSelect = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <Select
        onChange={val => props.fn(val, props.name, true)}
        multiple
        value={arrOrEmpty(props.obj, props.name)}
      >
        {props.arr.map(o => (
          <option value={o} key={o}>
            {capitalise(o)}
          </option>
        ))}
      </Select>
    </div>
  </div>
);

export default MultiSelect;
