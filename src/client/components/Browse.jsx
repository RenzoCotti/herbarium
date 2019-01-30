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

import "./style/Browse.css";
import "./style/Media.css";

class Browse extends Component {
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
          className="entry"
          onClick={e => this.goToPlant(e, index)}
        >
          <img src={plant.images[0].url} className="secondary-image" alt="" />
          <span className="link">{capitalise(plant.commonName)}</span>
        </div>
      );
    });
  }

  render() {
    if (this.state.redirect)
      //do somethign on update
      return <Redirect push to={"/plant/" + this.props.plant.commonName} />;

    console.log("RENDERING");
    if (!this.props.plants) return <div>DERP</div>;

    return (
      <div className="secondary-container background">
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
)(Browse);
