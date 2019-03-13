import React, { Component } from "react";
import ModifyPlant from "../modules/ModifyPlant";

class EditPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e, toSend) {
    e.preventDefault();
    console.log(toSend);

    let req = await fetch("/api/plant/edit", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    });
    console.log("updated");
    console.log(await req.json());
  }

  render() {
    return <ModifyPlant fn={this.onSubmit} edit={true} />;
  }
}

export default EditPage;
