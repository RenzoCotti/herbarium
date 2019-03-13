import React from "react";
import definitions from "../../../utility/definitions";
import { toColour, stringOrNull } from "../../../utility/utility";

const SelectColours = props => {
  let val = stringOrNull(props.plant, props.name);

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select
          onChange={val => props.fn(val, props.name)}
          className="colourSelect"
          value={val ? val : "select an option"}
        >
          <option disabled value="select an option">
            select an option
          </option>
          {definitions.colours.map(c => (
            <option
              key={c}
              style={{
                backgroundColor: c,
                color: "transparent"
              }}
              value={c}
            >
              {toColour(c)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectColours;
