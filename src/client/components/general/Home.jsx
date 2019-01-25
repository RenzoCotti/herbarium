import React, { Component } from "react";
import "../style/general.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="secondary-container">
        <div className="super-title">Herbarium</div>
        <div>
          A resource for looking up and cataloguing plants, herbs and such.
        </div>
      </div>
    );
  }
}

export default Home;
