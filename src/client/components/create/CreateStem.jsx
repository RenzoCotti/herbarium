import React from "react";
import definitions from "../../../utility/definitions";

import Select from "../modules/Select";
import TextArea from "../modules/TextArea";
import SelectColours from "../modules/SelectColours";

const CreateStem = props => (
  <React.Fragment>
    <div className="title padded-bottom padded-top">Stem/Trunk</div>
    <SelectColours
      label="Colour: *"
      name="stemColour"
      fn={props.select}
      plant={props.plant}
    />
    <Select
      label="Texture: *"
      name="stemTexture"
      arr={definitions.stemTexture.sort()}
      fn={props.select}
      plant={props.plant}
    />
    <TextArea
      label="Description:"
      name="stemDescription"
      fn={props.change}
      plant={props.plant}
    />
  </React.Fragment>
);

export default CreateStem;
