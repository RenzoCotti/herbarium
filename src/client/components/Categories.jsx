import React, { Component } from "react";
import Category from "./Category";
import "./style/categories.css";

const definitions = require("../../utility/definitions");

class Categories extends Component {
  state = {};

  showCategory(e) {
    console.log(e.target.parentNode.lastChild);
    this.setState({});
  }

  render() {
    return (
      <div>
        <div>Categories:</div>
        <Category name="Leaf Venation" list={definitions.leafVenation} />
        {/* Leaf Venation
        
        
         Leaf Shape Region Leaf Arrangement Leaf Margin Plant Type
        Medicinal Properties */}
      </div>
    );
  }
}

export default Categories;
