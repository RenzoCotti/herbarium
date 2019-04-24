import React, { Component } from "react";
import Row from "./Row";
import { capitalise } from "../../../utility/utility";

class Properties extends Component {
  state = {};

  getList() {
    let temp = {};
    for (let a of this.props.plant.uses) {
      let current = temp[a.part];
      if (!current) {
        current = { part: a.part };

      }

      if (a.title === "medical") {
        current.medicalPreparation = a.comment;
        current.medicalProperties = a.medicalProperties;
      } else if (a.title === "edibility") {
        current.edibility = a.edibility;
        current.foodPreparation = a.comment;
      } else {
        current.otherTitle = a.title;
        current.otherComment = a.comment;
      }

      temp[a.part] = current;
    }

    let arr = [];
    for (let k of Object.keys(temp)) {
      arr.push(temp[k]);
    }

    return arr.map(use => {
      return (
        <React.Fragment key={use.part}>
          <div className="row-table">
            <div className="title">{capitalise(use.part)}</div>
          </div>
          <Row toRender={use.edibility} label="Edible" />
          <Row toRender={use.foodPreparation} label="Edibility Notes" />
          <Row
            toRender={use.medicalProperties}
            label="Medical"
            alt={use.medicalProperties ? use.medicalProperties.join(", ") : ""}
          />
          <Row toRender={use.medicalPreparation} label="Medical Notes" />
          <Row toRender={use.otherComment} label={capitalise(use.otherTitle)} />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.getList()}
      </React.Fragment>
    );
  }
}

export default Properties;
