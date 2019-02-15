import React, { Component } from "react";

import "../style/create.css";
import CreateGeneral from "../create/CreateGeneral";
import CreateStem from "../create/CreateStem";
import CreateLeaves from "../create/CreateLeaves";
import CreateFlowersFruit from "../create/CreateFlowersFruit";

const definitions = require("../../../utility/definitions");

class CreatePage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  render() {
    let change = this.handleChange.bind(this);
    let select = this.handleSelect.bind(this);

    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">Create new Plant</div>

        <form onSubmit={this.onSubmit}>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral change={change} select={select} />
              <CreateStem change={change} select={select} />
            </div>

            <div className="table-container">
              <CreateLeaves change={change} select={select} />
              <CreateFlowersFruit change={change} select={select} />
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
