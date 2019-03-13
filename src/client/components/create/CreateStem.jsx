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
      obj={props.obj}
    />
    <Select
      label="Texture: *"
      name="stemTexture"
      arr={definitions.stemTexture.sort()}
      fn={props.select}
      obj={props.obj}
    />
    <TextArea
      label="Description:"
      name="stemDescription"
      fn={props.change}
      obj={props.obj}
    />
  </React.Fragment>
);

export default CreateStem;
