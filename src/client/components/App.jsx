import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateLogin } from "../redux/actions";

import Navbar from "./general/Navbar";
import Search from "./modules/Search";
import PlantDetail from "./modules/PlantDetail";
import List from "./modules/List";
import Categories from "./modules/Categories";
import Footbar from "./general/Footbar";
import Home from "./general/Home";
import About from "./general/About";
import CreatePage from "./modules/ModifyPlant";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.checkIfLogged();
  }

  async checkIfLogged() {
    fetch("/api/admin/status")
      .then(req => {
        return req.json();
      })
      .then(res => {
        this.props.updateLogin(res.login);
      });
  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar />

          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/search" component={Search} />
            <Route path="/plant" component={PlantDetail} />
            <Route path="/list" component={List} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit" component={CreatePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/about" component={About} />
          </div>

          <Footbar />
        </React.Fragment>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateLogin: value => dispatch(updateLogin(value))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
