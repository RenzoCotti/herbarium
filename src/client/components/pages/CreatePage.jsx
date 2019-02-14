import React, { Component } from "react";
import { capitalise, toColour } from "../../../utility/utility";
import "../style/create.css";

const definitions = require("../../../utility/definitions");

class CreatePage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createOptions = this.createOptions.bind(this);
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

  createInput(label, name, area, size) {
    return (
      <div className="row-table">
        <div className="label-table sub-title">{label}</div>
        <div className="content-table">
          {area ? (
            <textarea
              className="forms"
              type="text"
              name={name}
              onChange={this.handleChange}
              autoComplete="off"
            />
          ) : (
            <input
              className={size ? "forms shortForm" : "forms"}
              type="text"
              name={name}
              onChange={this.handleChange}
              autoComplete="off"
            />
          )}
          {size ? size : ""}
        </div>
      </div>
    );
  }

  createOptions(label, name, arr, multiple) {
    let content = arr.map(o => (
      <option value={o} key={o}>
        {capitalise(o)}
      </option>
    ));

    let select = multiple ? (
      <select
        value={this.state[label]}
        onChange={val => this.handleSelect(val, name, multiple)}
        multiple
      >
        {content}
      </select>
    ) : (
      <select
        value={this.state[label]}
        onChange={val => this.handleSelect(val, name)}
        defaultValue="select an option"
      >
        <option disabled value="select an option">
          select an option
        </option>
        {content}
      </select>
    );

    return (
      <div className="row-table">
        <div className="label-table sub-title">{label}</div>
        <div className="content-table">{select}</div>
      </div>
    );
  }

  createColours(label, name) {
    return (
      <div className="row-table">
        <div className="label-table sub-title">{label}</div>
        <div className="content-table">
          <select
            value={this.state[label]}
            onChange={val => this.handleSelect(val, name)}
            className="colourSelect"
            defaultValue="select an option"
          >
            <option disabled value="select an option">
              select an option
            </option>
            {definitions.colours.map(c => (
              <option
                key={c}
                style={{
                  backgroundColor: c,
                  color: "transparent"
                }}
                value={c}
              >
                {toColour(c)}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">Create new Plant</div>

        <form onSubmit={this.onSubmit}>
          <div className="createForm">
            <div className="table-container">
              <div className="title padded-bottom padded-top">General</div>
              {this.createInput("Common name: *", "commonName")}
              {this.createInput("Latin name: *", "latinName")}
              {this.createOptions(
                "Type: *",
                "plantType",
                definitions.plantType.sort()
              )}
              {this.createInput("Height:", "height", false, "m")}
              {this.createOptions("Evergreen: *", "evergreen", ["Yes", "No"])}
              {this.createOptions(
                "Regions: *",
                "regions",
                definitions.regions.sort(),
                true
              )}
              {this.createInput("Habitat: *", "habitat")}
              {this.createInput("Description:", "description", true)}

              <div className="title padded-bottom padded-top">Stem/Trunk</div>
              {this.createColours("Colour: *", "stemColour")}
              {this.createOptions(
                "Texture: *",
                "stemTexture",
                definitions.stemTexture.sort()
              )}
              {this.createInput("Description:", "stemDescription", true)}
            </div>

            <div className="table-container">
              <div className="title padded-bottom padded-top">Leaves</div>
              {this.createOptions(
                "Shape: *",
                "leafShape",
                definitions.leafShape.sort()
              )}
              {this.createOptions(
                "Margin: *",
                "leafMargin",
                definitions.leafMargin.sort()
              )}
              {this.createOptions(
                "Venation: *",
                "leafVenation",
                definitions.leafVenation.sort()
              )}
              {this.createInput("Length: *", "leafLength", false, "cm")}
              {this.createInput("Description:", "leafDescription", true)}
              <div className="title padded-bottom padded-top">Flowers</div>
              {this.createColours(
                "Colour:",
                "flowerColour",
                definitions.colours
              )}
              {this.createOptions(
                "Bloom month:",
                "bloomMonth",
                definitions.months,
                true
              )}
              {this.createInput("Description:", "flowerDescription", true)}
              <div className="title padded-bottom padded-top">Fruit</div>
              {this.createColours(
                "Colour:",
                "fruitColour",
                definitions.colours
              )}
              {this.createOptions(
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
