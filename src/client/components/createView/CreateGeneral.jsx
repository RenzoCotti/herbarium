import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/input/Input";
import Select from "../modules/input/Select";
import TextArea from "../modules/input/TextArea";
import MultiSelect from "../modules/input/MultiSelect";

const CreateGeneral = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">General *</div>
    <Input
      label="Common name: *"
      name="commonName"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
    <Input
      label="Latin name: *"
      name="latinName"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
    <Select
      label="Type: *"
      name="plantType"
      arr={definitions.plantType.sort()}
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <Input
      label="Height: *"
      name="height"
      text="m"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
    <Select
      label="Evergreen: *"
      name="evergreen"
      arr={definitions.evergreen}
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <MultiSelect
      label="Regions: *"
      name="regions"
      arr={definitions.regions.sort()}
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <TextArea
      label="Description:"
      name="description"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
  </React.Fragment>
);

export default CreateGeneral;
