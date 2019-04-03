import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/input/Input";
import SelectDropdown from "../modules/input/Select";
import TextArea from "../modules/input/TextArea";
import MultiSelectDropdown from "../modules/input/MultiSelect";

const CreateGeneral = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">General</div>
    <Input
      label="Common name: *"
      name="commonName"
      fn={props.change}
      obj={props.obj}
    />
    <Input
      label="Latin name: *"
      name="latinName"
      fn={props.change}
      obj={props.obj}
    />
    <SelectDropdown
      label="Type: *"
      name="plantType"
      arr={definitions.plantType.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <Input
      label="Height: *"
      name="height"
      text="m"
      fn={props.change}
      obj={props.obj}
    />
    <SelectDropdown
      label="Evergreen: *"
      name="evergreen"
      arr={["yes", "no"]}
      fn={props.select}
      obj={props.obj}
    />
    <MultiSelectDropdown
      label="Regions: *"
      name="regions"
      arr={definitions.regions.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <Input
      label="Habitat: *"
      name="habitat"
      fn={props.change}
      obj={props.obj}
    />
    <TextArea
      label="Description:"
      name="description"
      fn={props.change}
      obj={props.obj}
    />
  </React.Fragment>
);

export default CreateGeneral;
