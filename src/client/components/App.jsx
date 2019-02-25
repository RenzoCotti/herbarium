import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./general/Navbar";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import Footbar from "./general/Footbar";
import Home from "./general/Home";
import About from "./general/About";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar />

          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={CategoriesPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/create" component={CreatePage} />
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
