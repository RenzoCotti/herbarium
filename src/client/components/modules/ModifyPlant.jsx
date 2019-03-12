import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, getPlant } from "../../redux/actions";

import "../style/create.css";
import CreateGeneral from "../create/CreateGeneral";
import CreateStem from "../create/CreateStem";
import CreateLeaves from "../create/CreateLeaves";
import CreateFlowersFruit from "../create/CreateFlowersFruit";

class ModifyPlant extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  // async checkIfLogged() {
  //   let req = await fetch("/api/admin/status");
  //   let res = await req.json();
  //   if (res.login !== this.state.login) this.setState({ login: res.login });
  // }

  render() {
    let change = this.handleChange;
    let select = this.handleSelect;

    // this.checkIfLogged();
    if (!this.props.login)
      return (
        <div className="secondary-container">
          <div className="super-title padded-bottom">
            {this.props.edit ? "Edit Plant" : "Create New Plant"}
          </div>
          You need to be an admin to view this page.
        </div>
      );

    let plant = this.props.plant;
    if (plant) plant = plant[0];
    // console.log(plant);

    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">
          {this.props.edit ? "Edit Plant" : "Create New Plant"}
        </div>

        <form onSubmit={e => this.props.fn(e, this.state)}>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral change={change} select={select} plant={plant} />
              <CreateStem change={change} select={select} plant={plant} />
            </div>

            <div className="table-container">
              <CreateLeaves change={change} select={select} plant={plant} />
              <CreateFlowersFruit
                change={change}
                select={select}
                plant={plant}
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
)(ModifyPlant);
