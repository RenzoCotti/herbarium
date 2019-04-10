import React, { Component } from "react";
import ModifyPlant from "../modules/ModifyPlant";
import { connect } from "react-redux";
import { updatePlant } from "../../redux/actions";
import { Redirect } from "react-router";

class EditPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e, toSend) {
    e.preventDefault();

    //sends the update to backend
    let req = await fetch("/api/plant/edit", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    });

    //see how the update went
    let res = await req.text();

    if (res === "ok") {
      //updated successfully, redirect to plant view
      this.props.updatePlant([toSend]);
      this.setState({ updated: "ok" });
    } else if (res === "error") {
      //there was an error, stay on the page
      this.setState({ updated: "error" });
    }
  }

  render() {
    if (this.state.updated === "ok") {
      return <Redirect push to="/plant" />;
    }
    return (
      <React.Fragment>
        <ModifyPlant fn={this.onSubmit} edit={true} />
        {this.state.updated === "error" ? <div>Error updating.</div> : ""}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
  null,
  mapDispatchToProps
)(EditPage);
