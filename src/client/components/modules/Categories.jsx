import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updateList } from "../../redux/actions";
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

  async queryCategory(e, category) {
    let query;
    if (this.state.displaying.includes("medicinal") ||
      this.state.displaying.includes("edibility") ||
      this.state.displaying.includes("colour")) {
      query = "api/plant/search/" + category;
    } else {
      query = "api/plant/category/" + this.state.displaying + "/" + category;
    }

    let res = await fetch(query);
    let plants = await res.json();

    if (plants.list.length === 0) {
      //no plants found
      this.setState({ notFound: true, selectedEntry: category });
    } else {
      this.props.updateList(plants.list);
      this.setState({ redirect: true });
    }
  }

  changeList(e, apiName, name) {
    // e.target.parentNode.childNodes[1].className = "test";
    this.setState({ selected: name, displaying: apiName });
  }

  //displays a new list, from the current selected category
  displayList() {
    let current = this.state.displaying;
    if (!current) { return <div className="category-content secondary-container " />; }

    let first = true;
    let list = definitions[current].map(k => {
      let str = capitalise(k);
      let url = k;
      if (!isNaN(k)) {
        if (first === true) {
          str = "> " + k;
          url = k + "/" + k;
        } else {
          str = first + " - " + k;
          url = first + "/" + k;
        }
        //basically we're saving the last value to use on the next row
        first = k;
      }

      return (
        <div
          className={this.getSelectedEntryClass(k)}
          onClick={e => this.queryCategory(e, url)}
          key={k}
        >
          <span className="link">{str}</span>
        </div>
      );
    });

    // console.log(current);
    return (
      <div className="category-content secondary-container category-full">
        {list}
      </div>
    );
  }

  getClass(name) {
    // console.log(name === this.state.selected);
    return name === this.state.selected
      ? "category-entry link sub-title category-selected"
      : "category-entry link sub-title";
  }

  getSelectedEntryClass(name) {
    return name === this.state.selectedEntry
      ? "padded-right category-selected"
      : "padded-right";
  }

  renderSection(label, list) {
    return (
      <div className="category-section">
        <div className="category-label title">{label}</div>
        <div className="category-list">
          {list.map(k => {
            return (
              <div onClick={e => this.changeList(e, k.apiName, k.name)} key={k.apiName}
              >
                <div
                  className={this.getClass(k.name)}
                >
                  {k.name}
                </div>
                <div className={k.name === this.state.selected ? "" : "category-hidden-list"}>{this.displayList()}</div>
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

          {this.renderSection("General", [
            { name: "Plant Type", apiName: "plantType" },
            { name: "Regions", apiName: "regions" },
            { name: "Height (m)", apiName: "height" },
            { name: "Evergreen", apiName: "evergreen" },
            { name: "Stem Texture", apiName: "stemTexture" },
          ])}

          {this.renderSection("Leaf", [
            { name: "Shape", apiName: "leafShape" },
            { name: "Margin", apiName: "leafMargin" },
            { name: "Venation", apiName: "leafVenation" },
            { name: "Arrangement", apiName: "leafArrangement" },
            { name: "Leaf Length (cm)", apiName: "leafLength" }
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
            { name: "Edibility", apiName: "edibility" },
            { name: "Colour", apiName: "colours" },
            { name: "Bloom month", apiName: "bloomMonth" },
            { name: "Harvest month", apiName: "harvestMonth" },
          ])}

          {this.state.notFound ? (
            <div>No such plant found.</div>
          ) : (
              <br />
            )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updateList: plant => dispatch(updateList(plant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
