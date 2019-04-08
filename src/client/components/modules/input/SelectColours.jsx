import React from "react";
import definitions from "../../../../utility/definitions";
import { toColour, stringOrEmpty } from "../../../../utility/utility";
import Select from "./Select";

const SelectColours = props => {
  return (
    <Select
      label={props.label}
      name={props.name}
      customArr={definitions.colours.map(o => (
        <option value={o} key={o}>
          {capitalise(o)}
        </option>
      ))}
      fn={props.select}
      obj={props.obj}
    />
  );
};

export default SelectColours;
