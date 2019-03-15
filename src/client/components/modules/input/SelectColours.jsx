import React from "react";
import definitions from "../../../../utility/definitions";
import { toColour, stringOrEmpty } from "../../../../utility/utility";

const SelectColours = props => {
  let val = props.obj
    ? stringOrEmpty(props.obj, props.name)
    : "select an option";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select
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
        </select>
      </div>
    </div>
  );
};

export default SelectColours;
