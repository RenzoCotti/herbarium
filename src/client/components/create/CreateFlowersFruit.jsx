import React from "react";
import definitions from "../../../utility/definitions";

import TextArea from "../modules/TextArea";
import MultiSelect from "../modules/MultiSelect";
import SelectColours from "../modules/SelectColours";

const CreateFlowersFruit = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Flowers</div>
    <SelectColours label="Colour:" name="flowerColour" fn={props.select} />
    <MultiSelect
      label="Bloom month:"
      name="bloomMonth"
      arr={definitions.months}
      fn={props.select}
    />
    <TextArea label="Description:" name="flowerDescription" />

    <div className="title padded-bottom padded-top">Fruit</div>
    <SelectColours label="Colour:" name="fruitColour" fn={props.select} />
    <MultiSelect
      label="Harvest month:"
      name="harvestMonth"
      arr={definitions.months}
      fn={props.select}
    />
  </React.Fragment>
);

export default CreateFlowersFruit;
