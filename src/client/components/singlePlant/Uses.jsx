import React, { Component } from "react";
import { renderOptional } from "../../../utility/utility";

class Uses extends Component {
  state = {};

  getList() {
    return this.props.plant.uses.map(use => {
      return (
        <React.Fragment key={use.part}>
          <tr>
            <td className="title">{use.part}</td>
          </tr>
          {renderOptional(use.edible, "Edible", "Yes")}
          {renderOptional(use.foodPreparation, "Preparation")}
          {renderOptional(
            use.medicinalProperties,
            "Medicinal Properties",
            use.medicinalProperties.join(", ")
          )}
          {renderOptional(use.medicinalPreparation, "Medicinal Preparation")}
          {renderOptional(use.material, "Material")}
        </React.Fragment>
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
