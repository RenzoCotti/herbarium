import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/input/Input";
import SelectDropdown from "../modules/input/Select";
import TextArea from "../modules/input/TextArea";

const CreateLeaves = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Leaves</div>
    <SelectDropdown
      label="Shape: *"
      name="leafShape"
      arr={definitions.leafShape.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <SelectDropdown
      label="Margin: *"
      name="leafMargin"
      arr={definitions.leafMargin.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <SelectDropdown
      label="Venation: *"
      name="leafVenation"
      arr={definitions.leafVenation.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <SelectDropdown
      label="Arrangement: *"
      name="leafArrangement"
      arr={definitions.leafArrangement.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <Input
      label="Length: *"
      name="leafLength"
      text="cm"
      fn={props.change}
      obj={props.obj}
    />
    <TextArea
      label="Description:"
      name="leafDescription"
      fn={props.change}
      obj={props.obj}
    />
  </React.Fragment>
);

export default CreateLeaves;
