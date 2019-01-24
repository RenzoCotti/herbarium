import React, { Component } from "react";
import "./style/Identification.css";
import { capitaliseString } from "../../utility/utility";

//where, overall appearance, details, season

class Identification extends Component {
  state = {};

  constructor(props) {
    super(props);

    //utility
    this.renderOptional = this.renderOptional.bind(this);

    this.renderGeneral = this.renderGeneral.bind(this);
    this.renderStem = this.renderStem.bind(this);
    this.renderLeaf = this.renderLeaf.bind(this);
    this.renderFlowers = this.renderFlowers.bind(this);
    this.renderFruits = this.renderFruits.bind(this);
  }

  //if obj isnt null, render opt if is not null, otherwise render obj
  renderOptional(obj, str, opt) {
    if (obj) {
      return (
        <tr>
          <td className="sub-title">{str}:</td>
          <td>{opt ? opt : obj}</td>
        </tr>
      );
    }
    return;
  }

  renderGeneral(plant) {
    return (
      <React.Fragment>
        <tr>
          <th className="title">General</th>
        </tr>
        <tr>
          <td className="sub-title">Type:</td>
          <td>{plant.typeOfPlant}</td>
        </tr>
        <tr>
          <td className="sub-title">Evergreen:</td>
          <td> {plant.evergreen ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td className="sub-title">Zone:</td>
          <td>{plant.zone.join(", ")}</td>
        </tr>
        <tr>
          <td className="sub-title">Habitat:</td>
          <td>{plant.habitat}</td>
        </tr>
        <tr>
          <td className="sub-title">Height:</td>
          <td>{plant.height} m</td>
        </tr>
        {this.renderOptional(plant.description, "Description")}
      </React.Fragment>
    );
  }

  renderStem(plant) {
    return (
      <React.Fragment>
        <tr className="title">
          <th>Stem</th>
        </tr>
        <tr>
          <td className="sub-title">Colour:</td>
          <td>{plant.stemColour}</td>
        </tr>
        <tr>
          <td className="sub-title">Texture:</td>
          <td>{plant.stemTexture}</td>
        </tr>
        <tr>
          <td className="sub-title">Description:</td>
          <td>{plant.stemDescription}</td>
        </tr>
      </React.Fragment>
    );
  }

  renderLeaf(plant) {
    return (
      <React.Fragment>
        <tr className="title">
          <th>Leaves</th>
        </tr>
        <tr>
          <td className="sub-title">Shape:</td>
          <td>{plant.leafShape}</td>
        </tr>
        <tr>
          <td className="sub-title">Margin:</td>
          <td>{plant.leafMargin}</td>
        </tr>
        {this.renderOptional(plant.leafVenation, "Venation")}
        <tr>
          <td className="sub-title">Length:</td>
          <td>{plant.leafLength} cm</td>
        </tr>
        <tr>
          <td className="sub-title">Description:</td>
          <td>{plant.leafDescription}</td>
        </tr>
      </React.Fragment>
    );
  }

  renderFlowers(plant) {
    if (!plant.flowerColour) return;
    return (
      <React.Fragment>
        <tr className="title">
          <th>Flowers</th>
        </tr>
        {this.renderOptional(plant.flowerColour, "Colour")}
        {this.renderOptional(
          this.bloomMonth,
          "Blooming Months",
          plant.bloomMonth.join(", ")
        )}
        {this.renderOptional(plant.flowerDescription, "Description")}
      </React.Fragment>
    );
  }

  renderFruits(plant) {
    if (!plant.fruitColour) return;
    return (
      <React.Fragment>
        <tr className="title">
          <th>Fruit</th>
        </tr>
        {this.renderOptional(plant.fruitColour, "Colour")}
        {this.renderOptional(
          this.harvestMonth,
          "Harvest Months",
          plant.harvestMonth.join(", ")
        )}
        {this.renderOptional(plant.fruitDescription, "Description")}
        {this.renderOptional(plant.fruitSize, "Size", this.fruitSize + " cm")}
      </React.Fragment>
    );
  }

  render() {
    let plant = this.props.plant;
    return (
      <div className="identification">
        <div className="latin">{capitaliseString(plant.latinName)}</div>
        <div className="common">{capitaliseString(plant.commonName)}</div>
        <table>
          <tbody>
            {this.renderGeneral(plant)}
            {this.renderStem(plant)}
            {this.renderLeaf(plant)}
            {this.renderFlowers(plant)}
            {this.renderFruits(plant)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Identification;
