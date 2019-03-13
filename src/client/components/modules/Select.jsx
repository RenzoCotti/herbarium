import React from "react";
import { capitalise, stringOrNull } from "../../../utility/utility";

//label, name, arr, fn
const Select = props => {
  let val = stringOrNull(props.plant, props.name);

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select
          onChange={val => props.fn(val, props.name)}
          value={val ? val : "select an option"}
        >
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
