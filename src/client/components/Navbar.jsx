import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
  }

  state = {
    options: [
      "Home",
      "Identify",
      "Browse",
      "Random",
      "Create",
      "Search",
      "About"
    ]
  };

  getOptions() {
    return (
      <React.Fragment>
        {this.state.options.map(op => {
          let link = op.toLowerCase();
          if (op === "Home") link = "";
          return (
            <div className="nav-element" key={op}>
              <NavLink to={"/" + link}>{op}</NavLink>
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    return <div className="navbar">{this.getOptions()}</div>;
  }
}

export default Navbar;
