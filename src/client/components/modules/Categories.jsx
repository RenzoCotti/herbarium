import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../../redux/actions";
import "../style/categories.css";
import { capitalise } from "../../../utility/utility";
import { Redirect } from "react-router";

const definitions = require("../../../utility/definitions");

class Categories extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.queryCategory = this.queryCategory.bind(this);
    this.changeList = this.changeList.bind(this);
    this.displayList = this.displayList.bind(this);
  }

  componentWillUnmount() {
    if (this.props.plant === "not found") this.props.updatePlant(undefined);
  }

  async queryCategory(e, category) {
    let query;
    if (this.state.displaying.includes("medicinal")) {
      query = "api/plant/search/" + category;
    } else {
      query = "api/plant/category/" + this.state.displaying + "/" + category;
    }

    let res = await fetch(query);
    let plant = await res.json();

    if (this.state.displaying.includes("medicinal")) {
      plant = plant.list;
    }

    if (plant.length === 0) {
      //no plants found
      this.props.updatePlant("not found");
    } else {
      this.props.updatePlant(plant);
      this.setState({ redirect: true });
    }
  }

  changeList(e, apiName, name) {
    this.setState({ selected: name, displaying: apiName });
  }

  displayList() {
    let current = this.state.displaying;
    if (!current) return;

    console.log(current);
    return definitions[current].map(k => {
      return (
        <div
          className="category-content-entry"
          onClick={e => this.queryCategory(e, k)}
          key={k}
        >
          <span className="link">{capitalise(k)}</span>
        </div>
      );
    });
  }

  getClass(name) {
    // console.log(name === this.state.selected);
    return name === this.state.selected
      ? "category-entry link sub-title category-selected"
      : "category-entry link sub-title";
  }

  renderSection(label, list) {
    return (
      <div className="category-section">
        <div className="category-label title">{label}</div>
        <div className="category-list">
          {list.map(k => {
            return (
              <div
                className={this.getClass(k.name)}
                onClick={e => this.changeList(e, k.apiName, k.name)}
                key={k.apiName}
              >
                {k.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.redirect === true) return <Redirect push to="/list" />;

    return (
      <React.Fragment>
        <div className="secondary-container">
          <div className="super-title padded-bottom">Categories</div>

          {this.renderSection("Leaf", [
            { name: "Shape", apiName: "leafShape" },
            { name: "Margin", apiName: "leafMargin" },
            { name: "Venation", apiName: "leafVenation" },
            { name: "Arrangement", apiName: "leafArrangement" }
          ])}

          {this.renderSection("Medicinal", [
            { name: "General", apiName: "medicinalGeneral" },
            { name: "Respiratory", apiName: "medicinalRespiratory" },
            { name: "Circulatory", apiName: "medicinalCirculatory" },
            { name: "Digestive", apiName: "medicinalDigestive" },
            { name: "Nervous", apiName: "medicinalNervous" },
            { name: "Anti-pathogens", apiName: "medicinalPathogens" }
          ])}

          {this.renderSection("Various", [
            { name: "Regions", apiName: "regions" },
            { name: "Plant Type", apiName: "plantType" }
          ])}

          {this.props.plant === "not found" ? (
            <div>No such plant found.</div>
          ) : (
            <br />
          )}
        </div>
        <div className="category-content secondary-container">
          {this.displayList()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlantAction(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
