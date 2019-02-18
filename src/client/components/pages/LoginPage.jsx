import React, { Component } from "react";

class LoginPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.postRequest = this.postRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.newAdmin = this.newAdmin.bind(this);
    this.listAdmin = this.listAdmin.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  async postRequest(url) {
    let req = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    let res = await req.text();
    console.log(res);
  }
  async loginAdmin(ev) {
    ev.preventDefault();
    this.postRequest("/api/admin/login");
  }

  async newAdmin(ev) {
    ev.preventDefault();
    this.postRequest("/api/admin/new");
  }

  async deleteAdmin(ev) {
    ev.preventDefault();
    let req = await fetch("/api/admin/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    let res = await req.text();
    console.log(res);
  }

  async listAdmin(ev) {
    ev.preventDefault();
    let req = await fetch("/api/admin/list");
    let res = await req.json();
    console.log(res);
  }

  render() {
    return (
      <div>
        <form>
          <div>username</div>
          <input
            className="forms"
            type="text"
            name="username"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <div>password</div>
          <input
            className="forms"
            type="text"
            name="password"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input type="submit" value="Login" onClick={this.loginAdmin} />
          <input type="submit" value="List" onClick={this.listAdmin} />
          <input type="submit" value="New" onClick={this.newAdmin} />
          <input type="submit" value="Delete" onClick={this.deleteAdmin} />
        </form>
      </div>
    );
  }
}

export default LoginPage;
