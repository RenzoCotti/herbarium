import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, getPlant } from "../../redux/actions";

import "../style/create.css";
import CreateGeneral from "../create/CreateGeneral";
import CreateStem from "../create/CreateStem";
import CreateLeaves from "../create/CreateLeaves";
import CreateFlowersFruit from "../create/CreateFlowersFruit";

class CreatePage extends Component {
  state = { login: undefined };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    switch (this.state.evergreen) {
      case "Yes":
        this.state.evergreen = true;
      case "No":
        this.state.evergreen = false;
    }

    let req = await fetch("/api/plant/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    console.log(await req.text());
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

  async checkIfLogged() {
    let req = await fetch("/api/admin/status");
    let res = await req.json();
    if (res.login !== this.state.login) this.setState({ login: res.login });
  }

  render() {
    let change = this.handleChange.bind(this);
    let select = this.handleSelect.bind(this);

    console.log("here");
    this.checkIfLogged();
    if (!this.props.login)
      return (
        <div className="secondary-container">
          You need to be an admin to view this page.
        </div>
      );

    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">Create new Plant</div>

        <form onSubmit={this.onSubmit}>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral
                change={change}
                select={select}
                plant={this.props.plant}
              />
              <CreateStem
                change={change}
                select={select}
                plant={this.props.plant}
              />
            </div>

            <div className="table-container">
              <CreateLeaves
                change={change}
                select={select}
                plant={this.props.plant}
              />
              <CreateFlowersFruit
                change={change}
                select={select}
                plant={this.props.plant}
              />
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

const mapStateToProps = state => ({
  login: getLogin(state),
  plant: getPlant(state)
});

export default connect(
  mapStateToProps,
  null
)(CreatePage);
