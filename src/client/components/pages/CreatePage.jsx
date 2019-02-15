import React, { Component } from "react";
import {
  createInput,
  createOptions,
  createColours
} from "../../../utility/utility";
import "../style/create.css";

const definitions = require("../../../utility/definitions");

class CreatePage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    switch (this.state.evergreen) {
      case "Yes":
        this.state.evergreen = true;
      case "No":
        this.state.evergreen = false;
    }

    fetch("/api/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSelect(e, name, multi) {
    if (!multi) {
      this.setState({
        [name]: e.target.value
      });
      return;
    }

    let temp = [];
    for (let a of e.target.selectedOptions) {
      temp.push(a.value);
    }

    this.setState({
      [name]: temp
    });
  }

  inputForm(label, name, area, size) {
    return createInput(label, name, this.handleChange, area, size);
  }

  selectForm(label, name, arr, multi) {
    return createOptions(label, name, this.handleSelect, arr, multi);
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">Create new Plant</div>

        <form onSubmit={this.onSubmit}>
          <div className="createForm">
            <div className="table-container">
              <div className="title padded-bottom padded-top">General</div>
              {this.inputForm("Common name: *", "commonName")}
              {this.inputForm("Latin name: *", "latinName")}
              {this.selectForm(
                "Type: *",
                "plantType",
                definitions.plantType.sort()
              )}
              {this.inputForm("Height:", "height", false, "m")}
              {this.selectForm("Evergreen: *", "evergreen", ["Yes", "No"])}
              {this.selectForm(
                "Regions: *",
                "regions",
                definitions.regions.sort(),
                true
              )}
              {this.inputForm("Habitat: *", "habitat", this.handleChange)}
              {this.inputForm(
                "Description:",
                "description",
                this.handleChange,
                true
              )}

              <div className="title padded-bottom padded-top">Stem/Trunk</div>
              {createColours("Colour: *", "stemColour", this.handleSelect)}
              {this.selectForm(
                "Texture: *",
                "stemTexture",
                definitions.stemTexture.sort()
              )}
              {this.inputForm("Description:", "stemDescription", true)}
            </div>

            <div className="table-container">
              <div className="title padded-bottom padded-top">Leaves</div>
              {this.selectForm(
                "Shape: *",
                "leafShape",
                definitions.leafShape.sort()
              )}
              {this.selectForm(
                "Margin: *",
                "leafMargin",
                definitions.leafMargin.sort()
              )}
              {this.selectForm(
                "Venation: *",
                "leafVenation",
                definitions.leafVenation.sort()
              )}
              {this.inputForm("Length: *", "leafLength", false, "cm")}
              {this.inputForm("Description:", "leafDescription", true)}
              <div className="title padded-bottom padded-top">Flowers</div>
              {createColours("Colour:", "flowerColour", this.handleSelect)}
              {this.selectForm(
                "Bloom month:",
                "bloomMonth",
                definitions.months,
                true
              )}
              {this.inputForm("Description:", "flowerDescription", true)}
              <div className="title padded-bottom padded-top">Fruit</div>
              {createColours("Colour:", "fruitColour", this.handleSelect)}
              {this.selectForm(
                "Harvest month:",
                "harvestMonth",
                definitions.months,
                true
              )}
              //TODO images
              <br />
              //TODO uses
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePage;
