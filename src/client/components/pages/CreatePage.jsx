import React, { Component } from "react";
import ModifyPlant from "../modules/ModifyPlant";
import { connect } from "react-redux";
import { updatePlant, getPlant } from "../../redux/actions";
import { Redirect } from "react-router";

class CreatePage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e, toSend) {
    e.preventDefault();

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
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    if (this.props.plant) return <Redirect push to="/plant" />;

    return (
      < React.Fragment > <ModifyPlant fn={this.onSubmit} edit={false} />;
    {this.state.error ? <div>Error updating.</div> : ""}
      </React.Fragment >)
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePage);
