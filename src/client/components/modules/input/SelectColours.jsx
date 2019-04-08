import React from "react";
import definitions from "../../../../utility/definitions";
import { toColour, capitalise } from "../../../../utility/utility";
import Select from "./Select";

const SelectColours = props => {
  return (
    <Select
      label={props.label}
      name={props.name}
      customArr={definitions.colours.map(o => (
        <option
          value={o}
          key={o}
          data-icon={"./public/images/colours/" + o + ".png"}
        >
          {capitalise(toColour(o))}
        </option>
      ))}
      fn={props.select}
      obj={props.obj}
    />
  );
};

export default SelectColours;
