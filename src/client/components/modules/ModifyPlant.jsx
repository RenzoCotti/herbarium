import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, getPlant, updatePlant } from "../../redux/actions";
import { Redirect } from "react-router";

import CreateGeneral from "../createView/CreateGeneral";
import CreateStem from "../createView/CreateStem";
import CreateLeaves from "../createView/CreateLeaves";
import CreateFlowersFruit from "../createView/CreateFlowersFruit";
import AddImage from "./AddImage";
import AddUses from "./AddUses";
import Button from "./input/Button";

class ModifyPlant extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    //we're initialising the state for the controlled component
    if (this.props.edit && this.props.plant) {
      let obj = Object.assign({}, this.props.plant[0]);
      this.state = obj;
    }
  }

  componentDidMount() {
    //if, after mounting, the component doesn't have a plant,
    //we're redirecting to home
    if (this.props.edit && !this.props.plant) {
      this.setState({ toHome: true });
    } else if (!this.props.edit) this.setState({ images: [] });
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
    let change = this.handleChange;
    let select = this.handleSelect;

    //doesn't display the page if the user isnt logged
    if (!this.props.login)
      return (
        <div className="secondary-container">
          <div className="super-title padded-bottom">
            {this.props.edit ? "Edit Plant" : "Create New Plant"}
          </div>
          You need to be an admin to view this page.
        </div>
      );

    //redirects home if necessary
    if (this.state.toHome) {
      return <Redirect push to="/" />;
    }

    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">
          {this.props.edit ? "Edit Plant" : "Create New Plant"}
        </div>

        <form>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral change={change} select={select} obj={this.state} />
              <CreateStem change={change} select={select} obj={this.state} />
              <CreateLeaves change={change} select={select} obj={this.state} />
            </div>

            <div className="table-container">
              <CreateFlowersFruit
                change={change}
                select={select}
                obj={this.state}
              />
              <AddImage
                images={this.state.images}
                fn={lst => this.setState({ images: lst })}
              />
              <AddUses
                uses={this.state.uses}
                fn={lst => this.setState({ uses: lst })}
              />
              <br />
            </div>
          </div>

          <Button value="Confirm" fn={e => this.props.fn(e, this.state)} />
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
  updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyPlant);
