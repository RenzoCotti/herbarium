import React from "react";
import definitions from "../../../../utility/definitions";
import { toColour, stringOrEmpty } from "../../../../utility/utility";
import { Select } from "react-materialize";

const SelectColours = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  let val = temp ? temp : "select an option";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <Select
          onChange={v => props.fn(v, props.name)}
          className="colourSelect"
          value={val}
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
        </Select>
      </div>
    </div>
  );
};

export default SelectColours;
