import React from "react";
import definitions from "../../../utility/definitions";

import Input from "../modules/Input";
import Select from "../modules/Select";
import TextArea from "../modules/TextArea";
import MultiSelect from "../modules/MultiSelect";

const CreateGeneral = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">General</div>
    <Input label="Common name: *" name="commonName" fn={props.change} />
    <Input label="Latin name: *" name="latinName" fn={props.change} />
    <Select
      label="Type: *"
      name="plantType"
      arr={definitions.plantType.sort()}
      fn={props.select}
    />
    <Input label="Height: *" name="height" text="m" fn={props.change} />
    <Select
      label="Evergreen: *"
      name="evergreen"
      arr={["Yes", "No"]}
      fn={props.select}
    />
    <MultiSelect
      label="Regions: *"
      name="regions"
      arr={definitions.regions.sort()}
      fn={props.select}
    />
    <Input label="Habitat: *" name="habitat" fn={props.change} />
    <TextArea label="Description:" name="description" fn={props.change} />
  </React.Fragment>
);

export default CreateGeneral;
