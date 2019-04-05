import React from "react";
import { capitalise, stringOrEmpty } from "../../../../utility/utility";
import { Select } from "react-materialize";

//label, name, arr, fn
const SelectDropdown = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  let val = temp ? temp : "";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select
          onChange={v => props.fn(v, props.name)}
          defaultValue={val}
          className="select"
        >
          <option value=" " />
          {props.arr.map(o => (
            <option value={o} key={o}>
              {capitalise(o)}
            </option>
          ))}
        </select>
        <span className="custom-caret">&#54;</span>
      </div>
    </div>
  );
};

export default SelectDropdown;
