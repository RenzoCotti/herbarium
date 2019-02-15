import React from "react";
import { capitalise } from "../../../utility/utility";

//label, name, arr, fn
const Select = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <select
        onChange={val => props.fn(val, props.name)}
        defaultValue="select an option"
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

export default Select;
