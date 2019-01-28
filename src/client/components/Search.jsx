import React, { Component } from "react";

class Search extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getPlant = this.getPlant.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  async getPlant(url) {
    console.log(url);
    let res = await fetch(url);
    let plant = await res.json();
    this.props.setPlant(plant);
  }

  async getRandom(e) {
    e.preventDefault();
    this.getPlant("/api/random");
  }

  onSubmit(e) {
    e.preventDefault();
    this.getPlant("/api/plant/" + this.state.plant);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="plant" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        <input type="submit" value="Random" onClick={this.getRandom} />
      </form>
    );
  }
}

export default Search;
