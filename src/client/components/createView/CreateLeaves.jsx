import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/input/Input";
import Select from "../modules/input/Select";
import TextArea from "../modules/input/TextArea";

const CreateLeaves = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Leaves *</div>
    <Select
      label="Shape: *"
      name="leafShape"
      arr={definitions.leafShape.sort()}
      fn={props.select}
      obj={props.obj}
      link="leaves/shape/"
      errors={props.errors}
    />
    <Select
      label="Margin: *"
      name="leafMargin"
      arr={definitions.leafMargin.sort()}
      fn={props.select}
      obj={props.obj}
      link="leaves/margin/"
      errors={props.errors}
    />
    <Select
      label="Venation: *"
      name="leafVenation"
      arr={definitions.leafVenation.sort()}
      fn={props.select}
      obj={props.obj}
      link="leaves/venation/"
      errors={props.errors}
    />
    <Select
      label="Arrangement: *"
      name="leafArrangement"
      arr={definitions.leafArrangement.sort()}
      fn={props.select}
      obj={props.obj}
      link="leaves/arrangement/"
      errors={props.errors}
    />
    <Input
      label="Length: *"
      name="leafLength"
      text="cm"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
    <TextArea
      label="Description:"
      name="leafDescription"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
  </React.Fragment>
);

export default CreateLeaves;
