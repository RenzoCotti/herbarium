import React, { Component } from "react";
import Row from "./Row";
import { capitalise } from "../../../utility/utility";

class Properties extends Component {
  state = {};

  getList() {
    return this.props.plant.uses.map(use => {
      return (
        <React.Fragment key={use.part}>
          <div className="row-table">
            <div className="title">{capitalise(use.part)}</div>
          </div>
          <Row toRender={use.edible} label={"Edible"} alt="Yes" />
          <Row toRender={use.foodPreparation} label="Preparation" />
          <Row
            toRender={use.medicinalProperties}
            label="Medicinal"
            alt={use.medicinalProperties.join(", ")}
          />
          <Row toRender={use.medicinalPreparation} label="Preparation" />
          <Row toRender={use.material} label="Material" />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="table-container">{this.getList()}</div>
      </React.Fragment>
    );
  }
}

export default Properties;
