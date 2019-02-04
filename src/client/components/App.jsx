import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./general/Navbar";
import PlantDetail from "./singlePlant/Views/PlantDetail";
import CategoriesPage from "./CategoriesPage";
import Footbar from "./general/Footbar";
import Home from "./general/Home";
import Create from "./Create";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar />

          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={CategoriesPage} />
            <Route path="/search" component={PlantDetail} />
            <Route path="/create" component={Create} />
          </div>

          <Footbar />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
