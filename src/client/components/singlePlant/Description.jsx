import React, { Component } from "react";
import "../style/description.css";
import { capitaliseString, renderSection } from "../../../utility/utility";

//where, overall appearance, details, season

class Description extends Component {
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
    let arr = [
      {
        property: plant.typeOfPlant,
        label: "Type"
      },
      {
        property: plant.evergreen,
        label: "Evergreen",
        alt: plant.evergreen ? "Yes" : "No"
      },
      {
        property: plant.regions,
        label: "Regions",
        alt: plant.regions.join(", ")
      },
      {
        property: plant.habitat,
        label: "Habitat"
      },
      {
        property: plant.height,
        label: "Height",
        alt: plant.height + " m"
      },
      {
        property: plant.description,
        label: "Description"
      }
    ];
    return renderSection("General", arr);
  }

  renderStem(plant) {
    let arr = [
      {
        property: plant.stemColour,
        label: "Colour"
      },
      {
        property: plant.stemTexture,
        label: "Texture"
      },
      {
        property: plant.stemDescription,
        label: "Description"
      }
    ];
    return renderSection("Stem", arr);
  }

  renderLeaf(plant) {
    let arr = [
      {
        property: plant.leafShape,
        label: "Shape"
      },
      {
        property: plant.leafMargin,
        label: "Margin"
      },
      {
        property: plant.leafVenation,
        label: "Venation"
      },
      {
        property: plant.leafLength,
        label: "Length",
        alt: plant.leafLength + " cm"
      },
      {
        property: plant.leafDescription,
        label: "Description"
      }
    ];
    return renderSection("Leaves", arr);
  }

  renderFlowers(plant) {
    if (!plant.flowerColour) return;

    let arr = [
      {
        property: plant.flowerColour,
        label: "Colour"
      },
      {
        property: plant.bloomMonth,
        label: "Blooming Months",
        alt: plant.bloomMonth.join(", ")
      },
      {
        property: plant.flowerDescription,
        label: "Description"
      }
    ];
    return renderSection("Flowers", arr);
  }

  renderFruits(plant) {
    if (!plant.fruitColour) return;
    let arr = [
      {
        property: plant.fruitColour,
        label: "Colour"
      },
      {
        property: plant.harvestMonth,
        label: "Colour",
        alt: plant.harvestMonth.join(", ")
      },
      {
        property: plant.fruitDescription,
        label: "Description"
      },
      {
        property: plant.fruitSize,
        label: "Size",
        alt: plant.fruitSize + " cm"
      }
    ];
    return renderSection("Fruits", arr);
  }

  render() {
    let plant = this.props.plant;

    return (
      <div className="secondary-container">
        <div className="latinName">{capitaliseString(plant.latinName)}</div>
        <div className="commonName">{capitaliseString(plant.commonName)}</div>
        <div className="table-container">
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

export default Description;