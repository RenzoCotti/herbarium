import React, { Component } from "react";
import { renderOptional } from "../../../utility/utility";

class Uses extends Component {
  state = {};

  getList() {
    return this.props.plant.uses.map(use => {
      return (
        <div>
          <div className="title">{use.part}</div>
          {renderOptional(use.edible, "Edible", "Yes")}
          {renderOptional(use.foodPreparation, "Preparation")}
          {renderOptional(
            use.medicinalProperties,
            "Medicinal Properties",
            use.medicinalProperties.join(", ")
          )}
          {renderOptional(use.medicinalPreparation, "Medicinal Preparation")}
          {renderOptional(use.material, "Material")}
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="super-title">Uses</div>
        <table>
          <tbody>{this.getList()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Uses;
