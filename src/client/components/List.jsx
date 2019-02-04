import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { capitalise } from "../../utility/utility";
import {
  updatePlantFromIndexAction,
  updateListAction,
  getList,
  getPlant
} from "../redux/actions";

import "./style/list.css";
import "./style/media.css";

class List extends Component {
  state = {
    redirect: false
  };

  constructor(props) {
    super(props);
    this.getPlants = this.getPlants.bind(this);
  }

  componentDidMount() {
    this.getPlants();
  }

  async getPlants() {
    let res = await fetch("/api/list");
    let plants = await res.json();
    this.props.updateList(plants);
  }

  async goToPlant(e, i) {
    this.props.updatePlantFromIndex(i);
    this.setState({ redirect: true });
  }

  renderList(list) {
    return list.map((plant, index) => {
      // console.log(plant);
      return (
        <div
          key={plant.latinName}
          className="entry-list"
          onClick={e => this.goToPlant(e, index)}
        >
          <img src={plant.images[0].url} className="secondary-image" alt="" />
          <span className="label-list">{capitalise(plant.commonName)}</span>
        </div>
      );
    });
  }

  render() {
    if (this.state.redirect) return <Redirect push to="/search" />;

    if (!this.props.plants) return <div />;

    return (
      <div className="secondary-container">
        List of plants:
        {this.renderList(this.props.plants)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plants: getList(state),
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlantFromIndex: id => dispatch(updatePlantFromIndexAction(id)),
  updateList: list => dispatch(updateListAction(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
