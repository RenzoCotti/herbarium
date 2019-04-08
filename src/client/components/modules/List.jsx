import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { capitalise } from "../../../utility/utility";
import { updatePlantFromIndex, getPlant } from "../../redux/actions";

class List extends Component {
  state = {
    redirect: false
  };

  constructor(props) {
    super(props);
    this.goToPlant = this.goToPlant.bind(this);
  }

  async goToPlant(e, i) {
    this.props.updatePlantFromIndex(i);
    this.setState({ redirect: true });
  }

  renderList(list) {

    console.log("LIST")
    console.log(list)
    return list.map((plant, index) => {
      // console.log(plant);
      return (
        <div
          key={index}
          className="entry-list padded"
          onClick={e => this.goToPlant(e, index)}
        >
          <img
            src={
              plant.images[0]
                ? plant.images[0].url
                : "../../../../public/leaf_placeholder.jpg"
            }
            className="secondary-image"
            alt=""
          />
          <span className="label-list padded-left">
            {/*for debug purposes added plant.count*/}
            {capitalise(plant.latinName) +
              (plant.count ? " - " + plant.count : "")}
          </span>
        </div>
      );
    });
  }

  render() {
    if (!this.props.plant) return <Redirect push to="/" />;

    if (this.state.redirect || this.props.plant.length === 1)
      return <Redirect push to="/plant/" />;

    return (
      <div className="secondary-container">
        <div className="super-title margin-bottom">Results</div>
        <div className="list-container">
          {this.renderList(this.props.plant)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlantFromIndex: id => dispatch(updatePlantFromIndex(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
