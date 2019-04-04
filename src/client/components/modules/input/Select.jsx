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
        <Select onChange={v => props.fn(v, props.name)} defaultValue={val}>
          <option value=" " />
          {props.arr.map(o => (
            <option value={o} key={o}>
              {capitalise(o)}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectDropdown;
