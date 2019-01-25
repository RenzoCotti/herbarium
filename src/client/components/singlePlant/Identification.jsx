import React, { Component } from "react";
import "../style/Identification.css";
import {
  capitalise,
  capitaliseString,
  renderOptional
} from "../../../utility/utility";

//where, overall appearance, details, season

class Identification extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.renderGeneral = this.renderGeneral.bind(this);
    this.renderStem = this.renderStem.bind(this);
    this.renderLeaf = this.renderLeaf.bind(this);
    this.renderFlowers = this.renderFlowers.bind(this);
    this.renderFruits = this.renderFruits.bind(this);
  }

  renderGeneral(plant) {
    return (
      <React.Fragment>
        <tr>
          <th className="title">General</th>
        </tr>
        <tr>
          <td className="sub-title">Type:</td>
          <td>{capitalise(plant.typeOfPlant)}</td>
        </tr>
        <tr>
          <td className="sub-title">Evergreen:</td>
          <td>{plant.evergreen ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td className="sub-title">Regions:</td>
          <td>{plant.regions.join(", ")}</td>
        </tr>
        <tr>
          <td className="sub-title">Habitat:</td>
          <td>{capitalise(plant.habitat)}</td>
        </tr>
        <tr>
          <td className="sub-title">Height:</td>
          <td>{plant.height} m</td>
        </tr>
        {renderOptional(plant.description, "Description")}
      </React.Fragment>
    );
  }

  renderStem(plant) {
    return (
      <React.Fragment>
        <tr>
          <th className="title">Stem</th>
        </tr>
        <tr>
          <td className="sub-title">Colour:</td>
          <td>{capitalise(plant.stemColour)}</td>
        </tr>
        <tr>
          <td className="sub-title">Texture:</td>
          <td>{capitalise(plant.stemTexture)}</td>
        </tr>
        <tr>
          <td className="sub-title">Description:</td>
          <td>{capitalise(plant.stemDescription)}</td>
        </tr>
      </React.Fragment>
    );
  }

  renderLeaf(plant) {
    return (
      <React.Fragment>
        <tr>
          <th className="title">Leaves</th>
        </tr>
        <tr>
          <td className="sub-title">Shape:</td>
          <td>{capitalise(plant.leafShape)}</td>
        </tr>
        <tr>
          <td className="sub-title">Margin:</td>
          <td>{capitalise(plant.leafMargin)}</td>
        </tr>
        {renderOptional(plant.leafVenation, "Venation")}
        <tr>
          <td className="sub-title">Length:</td>
          <td>{plant.leafLength} cm</td>
        </tr>
        <tr>
          <td className="sub-title">Description:</td>
          <td>{capitalise(plant.leafDescription)}</td>
        </tr>
      </React.Fragment>
    );
  }

  renderFlowers(plant) {
    if (!plant.flowerColour) return;
    return (
      <React.Fragment>
        <tr>
          <th className="title">Flowers</th>
        </tr>
        {renderOptional(plant.flowerColour, "Colour")}
        {renderOptional(
          this.bloomMonth,
          "Blooming Months",
          plant.bloomMonth.join(", ")
        )}
        {renderOptional(plant.flowerDescription, "Description")}
      </React.Fragment>
    );
  }

  renderFruits(plant) {
    if (!plant.fruitColour) return;
    return (
      <React.Fragment>
        <tr>
          <th className="title">Fruit</th>
        </tr>
        {renderOptional(plant.fruitColour, "Colour")}
        {renderOptional(
          this.harvestMonth,
          "Harvest Months",
          plant.harvestMonth.join(", ")
        )}
        {renderOptional(plant.fruitDescription, "Description")}
        {renderOptional(plant.fruitSize, "Size", this.fruitSize + " cm")}
      </React.Fragment>
    );
  }

  render() {
    let plant = this.props.plant;

    return (
      <div className="secondary-container">
        <div className="latinName">{capitaliseString(plant.latinName)}</div>
        <div className="commonName">{capitaliseString(plant.commonName)}</div>
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
