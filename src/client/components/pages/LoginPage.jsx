import React, { Component } from "react";

class LoginPage extends Component {
  state = {};

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          className="forms"
          type="text"
          name={name}
          onChange={this.handleChange}
          autoComplete="off"
        />
      </div>
    );
  }
}

export default LoginPage;
