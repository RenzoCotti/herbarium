import React from "react";
import definitions from "../../../utility/definitions";

import TextArea from "../modules/input/TextArea";
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
    />
    <MultiSelect
      label="Bloom month:"
      name="bloomMonth"
      arr={definitions.months}
      fn={props.select}
      obj={props.obj}
    />
    <TextArea
      label="Description:"
      name="flowerDescription"
      obj={props.obj}
      fn={props.change}
    />

    <div className="title padded-bottom padded-top">Fruit</div>
    <SelectColours
      label="Colour:"
      name="fruitColour"
      fn={props.select}
      obj={props.obj}
    />
    <MultiSelect
      label="Harvest month:"
      name="harvestMonth"
      arr={definitions.months}
      fn={props.select}
      obj={props.obj}
    />
  </React.Fragment>
);

export default CreateFlowersFruit;
