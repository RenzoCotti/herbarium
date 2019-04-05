import React from "react";
import definitions from "../../../../utility/definitions";
import { toColour, stringOrEmpty } from "../../../../utility/utility";
import { Select } from "react-materialize";

const SelectColours = props => {
  let temp = stringOrEmpty(props.obj, props.name);
  let val = temp ? temp : " ";

  return (
    <div className="row-table">
      <div className="label-table sub-title">{props.label}</div>
      <div className="content-table">
        <select
          onChange={v => props.fn(v, props.name)}
          className="select selectColour"
          defaultValue={val}
        >
          <option value=" " />
          {definitions.colours.map(c => (
            <option
              key={c}
              style={{ backgroundColor: c, colour: "transparent !important" }}
              value={c}
            >
              {toColour(c)}
            </option>
          ))}
        </select>
        <span className="custom-caret">&#54;</span>
      </div>
    </div>
  );
};

export default SelectColours;
