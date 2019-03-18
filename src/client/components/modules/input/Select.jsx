import React from "react";
import { capitalise, stringOrEmpty } from "../../../../utility/utility";

//label, name, arr, fn
const Select = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  let val = temp ? temp : "select an option";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select onChange={v => props.fn(v, props.name)} defaultValue={val}>
          <option disabled value="select an option">
            select an option
          </option>
          {props.arr.map(o => (
            <option value={o} key={o}>
              {capitalise(o)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
