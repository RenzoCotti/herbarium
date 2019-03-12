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

    switch (toSend.evergreen) {
      case "Yes":
        toSend.evergreen = true;
      case "No":
        toSend.evergreen = false;
    }

    // let req = await fetch("/api/plant/new", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(this.state)
    // });
    // console.log(await req.text());
  }

  render() {
    return <ModifyPlant fn={this.onSubmit} edit={true} />;
  }
}

export default EditPage;
