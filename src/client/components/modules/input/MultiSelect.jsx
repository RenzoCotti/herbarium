import React from "react";
import { capitalise, arrOrEmpty } from "../../../../utility/utility";
import { Select as MaterializeSelect } from "react-materialize";

const MultiSelect = props => {
  let temp = arrOrEmpty(props.obj, props.name);
  let data = temp ? temp : [];
  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <MaterializeSelect
          onChange={val => props.fn(val, props.name, true)}
          multiple
          value={data}
        >
          <option value="" disabled selected />

          {props.arr.map(o => (
            <option value={o} key={o}>
              {capitalise(o)}
            </option>
          ))}
        </MaterializeSelect>
      </div>
    </div>
  );
};

export default MultiSelect;
