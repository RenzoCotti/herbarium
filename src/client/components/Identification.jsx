import React, { Component } from "react";
import "./style/Identification.css";

//where, overall appearance, details, season

class Identification extends Component {
  state = {};

  constructor(props) {
    super(props);

    //utility
    this.capitalise = this.capitalise.bind(this);
    this.capitaliseString = this.capitaliseString.bind(this);
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
        <div>
          {str}: {opt ? opt : obj}
        </div>
      );
    }
    return;
  }

  renderGeneral(plant) {
    return (
      <React.Fragment>
        <div className="title">General</div>
        <div>Type: {plant.typeOfPlant}</div>
        <div>Evergreen: {plant.evergreen ? "Yes" : "No"}</div>
        <div>Zone: {plant.zone.join(", ")}</div>
        <div>Habitat: {plant.habitat}</div>
        <div>Height: {plant.height} m</div>
        {this.renderOptional(plant.description, "Description")}
      </React.Fragment>
    );
  }

  renderStem(plant) {
    return (
      <React.Fragment>
        <div className="title">Stem</div>
        <div>Colour: {plant.stemColour}</div>
        <div>Texture: {plant.stemTexture}</div>
        <div>Description: {plant.stemDescription}</div>
      </React.Fragment>
    );
  }

  renderLeaf(plant) {
    return (
      <React.Fragment>
        <div className="title">Leaves</div>
        <div>Shape: {plant.leafShape}</div>
        <div>Margin: {plant.leafMargin}</div>
        {this.renderOptional(plant.leafVenation, "Venation")}
        <div>Length: {plant.leafLength} cm</div>
        <div>Description: {plant.leafDescription}</div>
      </React.Fragment>
    );
  }

  renderFlowers(plant) {
    if (!plant.flowerColour) return;
    return (
      <React.Fragment>
        <div className="title">Flowers</div>
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
        <div className="title">Fruit</div>
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

  capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  capitaliseString(str) {
    let arr = str.split(" ");
    if (arr.length > 1) {
      let tmp = "";
      for (let s of arr) {
        tmp += this.capitalise(s) + " ";
      }
      return tmp;
    } else {
      return this.capitalise(str);
    }
  }

  render() {
    let plant = this.props.plant;
    return (
      <div className="identification">
        <div className="latin">{this.capitaliseString(plant.latinName)}</div>
        <div className="common">{this.capitaliseString(plant.commonName)}</div>
        <div>
          {this.renderGeneral(plant)}
          {this.renderStem(plant)}
          {this.renderLeaf(plant)}
          {this.renderFlowers(plant)}
          {this.renderFruits(plant)}
        </div>
      </div>
    );
  }
}

export default Identification;
