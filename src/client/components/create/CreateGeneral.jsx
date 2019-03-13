import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/Input";
import Select from "../modules/Select";
import TextArea from "../modules/TextArea";
import MultiSelect from "../modules/MultiSelect";

const CreateGeneral = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">General</div>
    <Input
      label="Common name: *"
      name="commonName"
      fn={props.change}
      obj={props.plant}
    />
    <Input
      label="Latin name: *"
      name="latinName"
      fn={props.change}
      obj={props.plant}
    />
    <Select
      label="Type: *"
      name="plantType"
      arr={definitions.plantType.sort()}
      fn={props.select}
      obj={props.plant}
    />
    <Input
      label="Height: *"
      name="height"
      text="m"
      fn={props.change}
      obj={props.plant}
    />
    <Select
      label="Evergreen: *"
      name="evergreen"
      arr={["yes", "no"]}
      fn={props.select}
      obj={props.plant}
    />
    <MultiSelect
      label="Regions: *"
      name="regions"
      arr={definitions.regions.sort()}
      fn={props.select}
      obj={props.plant}
    />
    <Input
      label="Habitat: *"
      name="habitat"
      fn={props.change}
      obj={props.plant}
    />
    <TextArea
      label="Description:"
      name="description"
      fn={props.change}
      obj={props.plant}
    />
  </React.Fragment>
);

export default CreateGeneral;
