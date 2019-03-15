import React, { Component } from "react";
import ModifyPlant from "../modules/ModifyPlant";
import { connect } from "react-redux";
import { updatePlantAction } from "../../redux/actions";
import { Redirect } from "react-router";

class CreatePage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e, toSend) {
    e.preventDefault();
    // console.log(toSend);

    let req = await fetch("/api/plant/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    });
    let code = req.status;
    if (code === 201) {
      let res = await req.json();
      this.props.updatePlant(res);
    }
  }

  render() {
    if (this.props.plant) return <Redirect push to="/plant" />;
    return <ModifyPlant fn={this.onSubmit} edit={false} />;
  }
}

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlantAction(plant))
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePage);
