import React, { Component } from "react";

import Category from "./Category";
import "./style/categories.css";

const definitions = require("../../utility/definitions");

class Categories extends Component {
  state = {};

  render() {
    //get state of plant/plants, render list or single detail
    return (
      <div>
        <div>Categories:</div>
        <div className="title">Leaf</div>
        <div className="categories-container">
          <Category
            name="Leaf Shape"
            list={definitions.leafShape}
            cat="leafShape"
          />
          <Category
            name="Leaf Margin"
            list={definitions.leafMargin}
            cat="leafMargin"
          />
          <Category
            name="Leaf Venation"
            list={definitions.leafVenation}
            cat="leafVenation"
          />
          <Category
            name="Leaf Arrangement"
            list={definitions.leafArrangement}
            cat="leafArrangement"
          />
        </div>

        <div className="title">Various</div>
        <div className="categories-container">
          <Category
            name="Plant Type"
            list={definitions.plantTypes}
            cat="plantType"
          />
          <Category
            name="Medicinal Properties"
            list={definitions.fullMedicinalProperties}
            cat="medicinalProperties"
          />
          <Category name="Regions" list={definitions.regions} cat="regions" />
        </div>
      </div>
    );
  }
}

export default Categories;
