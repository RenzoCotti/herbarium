import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/Input";
import Select from "../modules/Select";
import TextArea from "../modules/TextArea";

const CreateLeaves = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Leaves</div>
    <Select
      label="Shape: *"
      name="leafShape"
      arr={definitions.leafShape.sort()}
      fn={props.select}
    />
    <Select
      label="Margin: *"
      name="leafMargin"
      arr={definitions.leafMargin.sort()}
      fn={props.select}
    />
    <Select
      label="Venation: *"
      name="leafVenation"
      arr={definitions.leafVenation.sort()}
      fn={props.select}
    />
    <Select
      label="Arrangement: *"
      name="leafArrangement"
      arr={definitions.leafArrangement.sort()}
      fn={props.select}
    />
    <Input label="Length: *" name="leafLength" text="cm" fn={props.change} />
    <TextArea label="Description:" name="leafDescription" fn={props.change} />
  </React.Fragment>
);

export default CreateLeaves;
