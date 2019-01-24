import React, { Component } from "react";
const definitions = require("../../utility/definitions");

class Create extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let obj = {
      latinName: this.state.latin,
      commonName: this.state.common,
      typeOfPlant: this.state.type
    };
    console.log(this.state);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  createRow(label, name) {
    return (
      <tr className="rowCreate">
        <td className="label">{label}</td>
        <td>
          <input type="text" name={name} onChange={this.handleChange} />
        </td>
      </tr>
    );
  }

  createOptions(label, name, arr) {
    return (
      <tr className="rowCreate">
        <td className="label">{label}</td>
        <td>
          <select value={this.state[name]} onChange={this.handleChange}>
            {arr.map(opt => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <table>
          <tbody>
            {this.createRow("Latin Name:", "latin")}
            {this.createRow("Common Name:", "common")}
            {this.createOptions("Type:", "type", definitions.plantTypes)}
          </tbody>
        </table>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Create;
