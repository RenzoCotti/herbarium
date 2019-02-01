import React, { Component } from "react";
import { renderOptional, capitalise } from "../../../utility/utility";

class Properties extends Component {
  state = {};

  getList() {
    return this.props.plant.uses.map(use => {
      return (
        <React.Fragment key={use.part}>
          <div className="row-table">
            <div className="title">{capitalise(use.part)}</div>
          </div>
          {renderOptional(use.edible, "Edible", "Yes")}
          {renderOptional(use.foodPreparation, "Preparation")}
          {renderOptional(
            use.medicinalProperties,
            "Medicinal",
            use.medicinalProperties.join(", ")
          )}
          {renderOptional(use.medicinalPreparation, "Preparation")}
          {renderOptional(use.material, "Material")}
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <div className="super-title">Properties</div> */}
        <div className="table-container">{this.getList()}</div>
      </React.Fragment>
    );
  }
}

export default Properties;
