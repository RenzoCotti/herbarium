import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./Navbar";
import PlantDetail from "./PlantDetail";
import Browse from "./Browse";
import Footbar from "./Footbar";
import Home from "./Home";
import PlantRandom from "./PlantRandom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/random" component={PlantRandom} />
            <Route path="/identify" component={PlantDetail} />
          </div>

          <Footbar />
        </div>
      </HashRouter>
    );
  }
}

export default App;
