import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, updateLogin } from "../../redux/actions";
import Input from "../modules/Input";
import Button from "../modules/Button";

class LoginPage extends Component {
  state = { username: "", password: "" };

  constructor(props) {
    super(props);
    this.postRequest = this.postRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.newAdmin = this.newAdmin.bind(this);
    // this.listAdmin = this.listAdmin.bind(this);
    this.logout = this.logout.bind(this);
  }
  // async listAdmin(ev) {
  //   ev.preventDefault();
  //   let req = await fetch("/api/admin/list");
  //   let res = await req.json();
  //   console.log(res);
  // }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  async postRequest(url) {
    // console.log(this.state);
    let req = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    let res = await req.text();
    // console.log(res);

    if (res.toLowerCase() === "ok") {
      this.setState({ username: null, password: null });
      this.props.updateLogin(true);
    } else if (res.toLowerCase() === "nope") {
      this.setState({ invalid: true });
    }
    return res;
  }
  async loginAdmin(ev) {
    ev.preventDefault();
    await this.postRequest("/api/admin/login");
  }

  async newAdmin(ev) {
    ev.preventDefault();
    await this.postRequest("/api/admin/new");
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

  async logout(ev) {
    ev.preventDefault();
    let req = await fetch("/api/admin/logout");
    let res = await req.text();

    console.log(res);
    if (res === "logout") this.props.updateLogin(false);
  }

  render() {
    if (this.props.login)
      return (
        <div className="secondary-container">
          Logged in.
          <Button value="Logout" fn={this.logout} />
        </div>
      );

    // console.log(this.state);

    return (
      <div className="secondary-container">
        <div className="super-title padded-bottom">Login</div>

        <div className="table-container">
          <form>
            <Input
              label="Username"
              name="username"
              fn={this.handleChange}
              obj={this.state}
            />
            <Input
              label="Password"
              password={true}
              name="password"
              fn={this.handleChange}
              obj={this.state}
            />

            <Button value="Login" fn={this.loginAdmin} />
            <Button value="New" fn={this.newAdmin} />
            <Button value="Delete" fn={this.deleteAdmin} />
            {/* <dd type="submit" value="List" onClick={this.listAdmin} /> */}
          </form>
        </div>

        <div>{this.state.invalid ? "Invalid credentials." : ""}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state)
});

const mapDispatchToProps = dispatch => ({
  updateLogin: value => dispatch(updateLogin(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
