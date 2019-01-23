import React, { Component } from "react";

class Footbar extends Component {
  state = {};
  render() {
    let today = new Date().getFullYear();
    return <div className="foot">&copy; {today} Renzo Cotti</div>;
  }
}

export default Footbar;
