import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlantAction, getPlant } from "../redux/actions";

class Search extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchPlant = this.fetchPlant.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  async fetchPlant(url) {
    // console.log(url);
    let res = await fetch(url);
    let plant = await res.json();
    this.props.updatePlant(plant);
  }

  async getRandom(e) {
    e.preventDefault();
    this.fetchPlant("/api/random");
  }

  onSubmit(e) {
    e.preventDefault();
    this.fetchPlant("/api/plant/" + this.state.plant);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <div className="secondary-container background">
        Search Plant:
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="plant"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input type="submit" value="Submit" />
          <input type="submit" value="Random" onClick={this.getRandom} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlantAction(plant))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
