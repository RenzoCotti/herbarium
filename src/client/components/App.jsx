import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./Navbar";
import PlantDetail from "./PlantDetail";
import Browse from "./Browse";
import Footbar from "./Footbar";
import Home from "./Home";

class App extends Component {
  // async getRandom() {
  //   this.setState({ loading: true });
  //   let res = await fetch("/random");
  //   let jplant = await res.json();

  //   this.setState({ loading: false });
  //   return jplant;
  // }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/random" component={PlantDetail} />
            <Route path="/identify" component={PlantDetail} />
          </div>

          <Footbar />
        </div>
      </HashRouter>
    );
  }
}

export default App;
