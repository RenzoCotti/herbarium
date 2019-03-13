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
      obj={props.obj}
    />
    <Input
      label="Latin name: *"
      name="latinName"
      fn={props.change}
      obj={props.obj}
    />
    <Select
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
    <Select
      label="Evergreen: *"
      name="evergreen"
      arr={["yes", "no"]}
      fn={props.select}
      obj={props.obj}
    />
    <MultiSelect
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
