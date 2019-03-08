import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

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

export default App;
