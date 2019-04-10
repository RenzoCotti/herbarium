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
    this.setState({ selectedEntry: category });
    let query;
    if (this.state.displaying.includes("medicinal")) {
      query = "api/plant/search/" + category;
    } else {
      query = "api/plant/category/" + this.state.displaying + "/" + category;
    }

    let res = await fetch(query);
    let plants = await res.json();

    if (plants.length === 0) {
      //no plants found
      this.setState({ notFound: true });
    } else {
      this.props.updateList(plants);
      this.setState({ redirect: true });
    }
  }

  changeList(e, apiName, name) {
    this.setState({ selected: name, displaying: apiName });
  }

  //displays a new list, from the current selected category
  displayList() {
    let current = this.state.displaying;
    if (!current)
      return <div className="category-content secondary-container " />;

    let list = definitions[current].map(k => {
      return (
        <div
          className={this.getSelectedEntryClass(k)}
          onClick={e => this.queryCategory(e, k)}
          key={k}
        >
          <span className="link">{capitalise(k)}</span>
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
      ? "category-content-entry category-selected"
      : "category-content-entry";
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

          {this.state.notFound ? (
            <div>No such plant found.</div>
          ) : (
              <br />
            )}
        </div>
        {this.displayList()}
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
