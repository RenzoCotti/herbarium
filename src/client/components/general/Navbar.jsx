import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/navfootbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
  }

  state = {
    options: ["Home", "Search", "Browse", "Create", "About"]
  };

  getOptions() {
    return (
      <React.Fragment>
        {this.state.options.map(op => {
          let link = op.toLowerCase();
          if (op === "Home") link = "";
          return (
            <NavLink className="nav-element" key={op} to={"/" + link}>
              {op}
            </NavLink>
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
