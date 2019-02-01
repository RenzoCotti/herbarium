import React, { Component } from "react";
import Select from "react-select";
import { capitalise } from "../../utility/utility";
import "./style/create.css";

const definitions = require("../../utility/definitions");

class Create extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.createRow = this.createRow.bind(this);
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
        [name]: e.value
      });
      return;
    }

    let temp = [];

    if (Array.isArray(e)) {
      for (let a of e) {
        temp.push(a.value);
      }
    } else {
      temp.push(e.value);
    }

    this.setState({
      [name]: temp
    });
  }

  createRow(label, name) {
    return (
      <tr className="rowCreate">
        <td className="sub-title">{label}</td>
        <td>
          <input
            className="form-control forms"
            type="text"
            name={name}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </td>
      </tr>
    );
  }

  createOptions(label, name, arr, multiple) {
    let temp = [];
    for (let s of arr) {
      let a = capitalise(s);
      temp.push({ value: a, label: a });
    }

    return (
      <tr className="rowCreate">
        <td className="sub-title">{label}</td>
        <td>
          <Select
            value={this.state[label]}
            onChange={val => this.handleSelect(val, name, multiple)}
            options={temp}
            isMulti={multiple ? true : false}
            className="forms"
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="secondary-container">
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              {this.createRow("Latin Name:", "latin")}
              {this.createRow("Common Name:", "common")}
              {this.createOptions("Type:", "type", definitions.plantTypes)}
              {this.createOptions("Evergreen:", "evergreen", ["Yes", "No"])}
              {this.createRow("Description:", "description")}
              {this.createOptions(
                "Regions:",
                "regions",
                definitions.regions,
                true
              )}
            </tbody>
          </table>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
