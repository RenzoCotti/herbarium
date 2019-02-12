import React, { Component } from "react";
import { capitalise, convertToColour } from "../../../utility/utility";
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

    let obj = {
      latinName: this.state.latin,
      commonName: this.state.common,
      typeOfPlant: this.state.type,
      evergreen: this.state.evergreen,
      description: this.state.description,
      regions: this.state.regions
    };
    console.log(this.state);
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

  createInput(label, name) {
    return (
      <div className="row-table">
        <div className="label-table sub-title">{label}</div>
        <div className="content-table">
          <input
            className="form-control forms"
            type="text"
            name={name}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }

  createOptions(label, name, arr, multiple) {
    let content = arr.sort().map(o => (
      <option value={o} key={o}>
        {capitalise(o)}
      </option>
    ));

    let select = multiple ? (
      <select
        value={this.state[label]}
        onChange={val => this.handleSelect(val, name, multiple)}
        multiple
        className="formcontrol"
      >
        {content}
      </select>
    ) : (
      <select
        value={this.state[label]}
        onChange={val => this.handleSelect(val, name)}
        className="formcontrol"
      >
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

  render() {
    return (
      <div className="secondary-container">
        <div className="super-title padded-bottom">Create new Plant</div>

        <form onSubmit={this.onSubmit}>
          <div className="table-container">
            <div className="title">General</div>
            {this.createInput("Common Name:", "common")}
            {this.createInput("Latin Name:", "latin")}
            {this.createOptions("Type:", "type", definitions.plantType)}
            {this.createOptions("Evergreen:", "evergreen", ["Yes", "No"])}
            {this.createInput("Description:", "description")}
            {this.createOptions(
              "Regions:",
              "regions",
              definitions.regions,
              true
            )}

            <div className="title">Stem</div>
            {this.createInput("Colour:", "stemColour")}
            {this.createInput("Texture:", "stemTexture")}
            {this.createInput("Description:", "stemDescription")}

            <div className="title">Leaves</div>
            {this.createOptions("Shape:", "leafShape", definitions.leafShape)}
            {this.createOptions(
              "Margin:",
              "leafMargin",
              definitions.leafMargin
            )}
            {this.createOptions(
              "Venation:",
              "leafVenation",
              definitions.leafVenation
            )}
            {this.createInput("Lenght:", "leafLength")}
            {this.createInput("Description:", "leafDescription")}
          </div>

          <div
            style={{
              display: "flex",
              width: "60px",
              flexWrap: "wrap",
              flexDirection: "row"
            }}
          >
            //TODO, INSPECT PRIMARY, SECONDARY AND TERTIARY COLOURS
            {definitions.colours.map((c, index) => (
              <React.Fragment>
                <div
                  style={{
                    backgroundColor: convertToColour(c),
                    width: "20px",
                    height: "20px"
                  }}
                  key={c}
                />
              </React.Fragment>
            ))}
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePage;
