import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, getPlant, updatePlantAction } from "../../redux/actions";

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

  componentDidMount() {
    let plant = this.props.plant;
    console.log("current plant is");
    console.log(plant);
    if (this.props.edit) {
      if (!this.props.plant) this.setState({ toHome: true });
      else {
        let obj = Object.assign({}, this.props.plant[0]);
        //we're editing, set the id for the backend
        this.setState(obj);
      }
    }
  }

  componentWillUnmount() {
    if (this.state.updated) {
    } else {
      this.props.updatePlant(null);
    }
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

    if (this.state.toHome) {
      return <Redirect push to="/" />;
    }

    // let plant = this.state;
    // if (this.props.edit) plant = plant[0];
    // console.log(plant);

    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">
          {this.props.edit ? "Edit Plant" : "Create New Plant"}
        </div>

        <form onSubmit={e => this.props.fn(e, this.state)}>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral
                change={change}
                select={select}
                plant={this.state}
              />
              <CreateStem change={change} select={select} plant={this.state} />
            </div>

            <div className="table-container">
              <CreateLeaves
                change={change}
                select={select}
                plant={this.state}
              />
              <CreateFlowersFruit
                change={change}
                select={select}
                plant={this.state}
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
const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlantAction(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyPlant);
