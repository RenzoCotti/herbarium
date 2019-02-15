import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/navfootbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
  }

  state = {
    options: ["Home", "Search", "Categories", "Create", "Login", "About"]
  };

  getOptions() {
    return (
      <React.Fragment>
        {this.state.options.map(op => {
          let link = op.toLowerCase();
          if (op === "Home") {
            return (
              <NavLink exact className="nav-element link" key={op} to="/">
                {op}
              </NavLink>
            );
          }

          return (
            <NavLink className="nav-element link" key={op} to={"/" + link}>
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
