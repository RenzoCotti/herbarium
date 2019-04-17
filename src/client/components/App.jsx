import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateLogin } from "../redux/actions";

//styles
import "./style/categories.css";
import "./style/description.css";
import "./style/general.css";
import "./style/input.css";
import "./style/layout.css";
// import "./style/media.css";
import "./style/table.css";
import "./style/text.css";
import "./style/list.css";


//component pages
import Navbar from "./general/Navbar";
import Search from "./modules/Search";
import PlantDetail from "./modules/PlantDetail";
import List from "./modules/List";
import Categories from "./modules/Categories";
import Footbar from "./general/Footbar";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";
import EditPage from "./pages/EditPage";

class App extends Component {
  constructor(props) {
    super(props);

    //sync backend and frontend for login status
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
            <Route path="/login" component={LoginPage} />
            <Route path="/about" component={About} />

            {/* invisible routes */}
            <Route path="/list" component={List} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit" component={EditPage} />
            <Route path="/plant" component={PlantDetail} />
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
