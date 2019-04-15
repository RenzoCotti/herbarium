import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, updateLogin } from "../../redux/actions";
import Input from "../modules/input/Input";
import Button from "../modules/input/Button";

class LoginPage extends Component {
  //initialise the state for controlled component
  state = { username: "", password: "", error: "" };

  constructor(props) {
    super(props);
    this.postRequest = this.postRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.createNewAccount = this.createNewAccount.bind(this);
    this.logout = this.logout.bind(this);
    this.validate = this.validate.bind(this);
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

    if (res.toLowerCase() === "ok") {
      this.setState({ username: "", password: "" });
      this.props.updateLogin(true);
    } else if (res.toLowerCase() === "nope") {
      this.setState({ error: "Invalid credentials." })
    }
    return res;
  }

  async login() {
    await this.postRequest("/api/admin/login");
  }

  async createNewAccount(ev) {
    ev.preventDefault();
    await this.postRequest("/api/admin/new");
  }

  async deleteAccount(ev) {
    ev.preventDefault();
    let req = await fetch("/api/admin/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await req.text();
  }

  async logout(ev) {
    ev.preventDefault();
    let req = await fetch("/api/admin/logout");
    let res = await req.text();
    if (res === "logout") this.props.updateLogin(false);
  }

  validate() {
    console.log(this.state)
    if (!this.state.username | this.state.username && this.state.username.length === 0) {
      this.setState({ error: "Please input a username." })
      return;
    } else if (!this.state.password | this.state.password && this.state.password.length === 0) {
      this.setState({ error: "Please input a password." })
      return;
    } else {
      this.setState({ error: "" })
      this.login();
    }
  }

  render() {
    //the user is logged in
    if (this.props.login) {
      return (
        <div className="secondary-container">
          Logged in. <br />
          <br />
          <Button value="Logout" fn={this.logout} />
        </div>
      );
    }

    return (
      <div className="secondary-container">
        <div className="super-title padded-bottom">Login</div>

        <div className="table-container">
          <form>
            <Input
              label="Username"
              name="username"
              obj={this.state}
              fn={this.handleChange}
            />
            <Input
              label="Password"
              name="password"
              password={true}
              obj={this.state}
              fn={this.handleChange}
            />


            <div style={this.state.error ?
              { height: "30px", backgroundColor: "var(--green)", display: "flex", flexDirection: "row", justifyContent: "center" } :
              { height: "30px" }}>
              {this.state.error}
            </div>



            <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Button button={true} value="Login" fn={this.validate} />
              {/* <Button value="New" fn={this.createNewAccount} />
              <Button value="Delete" fn={this.deleteAccount} /> */}
            </div>

          </form>
        </div>

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
