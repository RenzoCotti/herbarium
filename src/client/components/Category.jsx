import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlant, updatePlantAction } from "../redux/actions";
import "./style/categories.css";

import { capitalise } from "../../utility/utility";

class Category extends Component {
  state = { show: false };

  constructor(props) {
    super(props);
    this.showList = this.showList.bind(this);
    this.queryCategory = this.queryCategory.bind(this);
  }

  showList() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  getClass() {
    if (this.state.show) {
      return "category-list";
    } else {
      return "category-list-hidden";
    }
  }

  async queryCategory(e) {
    let query = "api/category/" + this.props.cat + "/" + e.target.innerHTML;

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

  render() {
    return (
      <div className="category-container">
        <div className="category-label" onClick={this.showList}>
          {this.props.name}
        </div>
        <div className={this.getClass()}>
          {this.props.list.map(k => {
            return (
              <div
                className="category-link"
                key={k}
                onClick={this.queryCategory}
              >
                {capitalise(k)}
              </div>
            );
          })}
        </div>
      </div>
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
)(Category);
