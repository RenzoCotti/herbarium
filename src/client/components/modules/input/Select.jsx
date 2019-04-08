import React from "react";
import { capitalise, stringOrEmpty } from "../../../../utility/utility";
import { Select as MaterializeSelect } from "react-materialize";

//label, name, arr, fn
const Select = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  let val = temp ? temp : "";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <MaterializeSelect
          onChange={v => props.fn(v, props.name)}
          defaultValue={val}
        >
          <option value="" disabled selected />
          {props.customArr
            ? props.customArr
            : props.arr.map(o => (
                <option value={o} key={o}>
                  {capitalise(o)}
                </option>
              ))}
        </MaterializeSelect>
      </div>
    </div>
  );
};

export default Select;
