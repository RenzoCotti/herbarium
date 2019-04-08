import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlant, getLogin } from "../../redux/actions";
import { Redirect } from "react-router";

import Row from "./Row";
import Button from "../modules/input/Button";
import { capitaliseString } from "../../../utility/utility";

//where, overall appearance, details, season

class Description extends Component {
  state = { login: undefined };

  constructor(props) {
    super(props);
    this.deletePlant = this.deletePlant.bind(this);
    // this.checkIfLogged = this.checkIfLogged.bind(this);
    this.editPlant = this.editPlant.bind(this);
    this.renderSection = this.renderSection.bind(this);

    this.renderGeneral = this.renderGeneral.bind(this);
    this.renderStem = this.renderStem.bind(this);
    this.renderLeaf = this.renderLeaf.bind(this);
    this.renderFlowers = this.renderFlowers.bind(this);
    this.renderFruits = this.renderFruits.bind(this);
  }

  renderSection(title, arr) {
    return (
      <React.Fragment>
        <div className="title padded-top">{title}</div>
        {arr.map((row, index) => (
          <Row
            key={index}
            toRender={row.property}
            label={row.label}
            alt={row.alt}
          />
        ))}
      </React.Fragment>
    );
  }

  renderGeneral(plant) {
    let arr = [
      {
        property: plant.plantType,
        label: "Type"
      },
      {
        property: plant.evergreen,
        label: "Evergreen"
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
    return this.renderSection("General", arr);
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
    return this.renderSection("Stem", arr);
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
    return this.renderSection("Leaves", arr);
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
    return this.renderSection("Flowers", arr);
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
    return this.renderSection("Fruits", arr);
  }

  async deletePlant() {
    console.log("deleting");
    let req = await fetch("/api/plant/delete/" + this.props.plant._id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    let res = await req.text();
    this.props.updatePlant("deleted");
    // console.log(res);
  }

  editPlant() {
    this.setState({ edit: true });
  }

  // async checkIfLogged() {
  //   let req = await fetch("/api/admin/status");
  //   let res = await req.json();
  //   if (res.login !== this.state.login) this.setState({ login: res.login });
  // }

  render() {
    let plant = this.props.plant;

    //the edit button has been pressed, go to edit page
    if (this.state.edit) return <Redirect push to="/edit" />;

    return (
      <div className="secondary-container">
        <div className="desc-header">
          <div className="plant-names">
            <span className="super-title">
              {capitaliseString(plant.commonName)}
            </span>
            <span className="sub-title">
              {" (" + capitaliseString(plant.latinName) + ")"}
            </span>
          </div>

          {/* if the user is logged, show the edit and delete buttons */}
          {this.props.login ? (
            <div className="modify-plant">
              <Button button="true" value="Delete" fn={this.deletePlant} />
              <Button button="true" value="Edit" fn={this.editPlant} />
            </div>
          ) : (
              ""
            )}
        </div>

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

const mapStateToProps = state => ({
  login: getLogin(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlant(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
