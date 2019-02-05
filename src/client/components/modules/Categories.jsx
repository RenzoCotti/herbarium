import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../../redux/actions";
import "../style/categories.css";
import { capitalise } from "../../../utility/utility";

const definitions = require("../../../utility/definitions");

class Categories extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.queryCategory = this.queryCategory.bind(this);
    this.changeList = this.changeList.bind(this);
    this.displayList = this.displayList.bind(this);
  }

  async queryCategory(e, category) {
    let query = "api/category/" + this.state.displaying + "/" + category;
    console.log(query);

    let res = await fetch(query);
    let plant = await res.json();
    if (plant.length === 0) {
      //no plants found
      this.props.updatePlant(-1);
    } else {
      this.props.updatePlant(plant);
    }

    console.log(this.props.plant);
    console.log("updated");
  }

  changeList(e, name) {
    this.setState({ displaying: name });
  }

  displayList() {
    let current = this.state.displaying;
    if (!current) return;
    return definitions[current].map(k => {
      return (
        <div
          className="category-content-entry"
          onClick={e => this.queryCategory(e, k)}
        >
          <span className="link"> {capitalise(k)}</span>
        </div>
      );
    });
  }

  renderSection(label, list) {
    return (
      <div className="category-section">
        <div className="title category-label">{label}</div>
        <div className="category-list">
          {list.map(k => {
            return (
              <div
                className="category-entry link sub-title"
                onClick={e => this.changeList(e, k.apiName)}
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
    console.log("here");
    return (
      <React.Fragment>
        <div className="category-title">Categories</div>
        {this.props.plant === -1 ? <div>No such plant found.</div> : ""}

        <div className="category-page">
          <div className="categories">
            {this.renderSection("Leaf", [
              { name: "Shape", apiName: "leafShape" },
              { name: "Margin", apiName: "leafMargin" },
              { name: "Venation", apiName: "leafVenation" },
              { name: "Arrangement", apiName: "leafArrangement" }
            ])}
            {this.renderSection("Various", [
              { name: "Regions", apiName: "regions" },
              { name: "Plant Type", apiName: "plantType" },
              { name: "Medicinal Properties", apiName: "medicinalProperties" }
            ])}
          </div>
          <div className="category-content">{this.displayList()}</div>
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
