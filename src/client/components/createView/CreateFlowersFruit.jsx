import React from "react";
import definitions from "../../../utility/definitions";

import TextArea from "../modules/input/TextArea";
import Input from "../modules/input/Input";
import MultiSelect from "../modules/input/MultiSelect";
import SelectColours from "../modules/input/SelectColours";

const CreateFlowersFruit = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Flowers</div>
    <SelectColours
      label="Colour:"
      name="flowerColour"
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <MultiSelect
      label="Bloom month:"
      name="bloomMonth"
      arr={definitions.months}
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <TextArea
      label="Description:"
      name="flowerDescription"
      obj={props.obj}
      fn={props.change}
      errors={props.errors}
    />

    <div className="title padded-bottom padded-top">Fruit</div>
    <SelectColours
      label="Colour:"
      name="fruitColour"
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <MultiSelect
      label="Harvest month:"
      name="harvestMonth"
      arr={definitions.months}
      fn={props.select}
      obj={props.obj}
      errors={props.errors}
    />
    <Input
      label="Fruit Size: "
      name="fruitSize"
      text="cm"
      fn={props.change}
      obj={props.obj}
      errors={props.errors}
    />
  </React.Fragment>
);

export default CreateFlowersFruit;
