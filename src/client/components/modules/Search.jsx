import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { updatePlantAction, getPlant } from "../../redux/actions";
import Button from "./Button";
import Input from "./Input";

class Search extends Component {
  state = { query: "" };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchPlant = this.fetchPlant.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  componentWillUnmount() {
    if (this.props.plant === "not found") this.props.updatePlant(undefined);
  }

  async fetchPlant(url) {
    let req = await fetch(url);
    let res = await req.json();

    if (res.length) {
      //list of plants, no keyword provided
      this.props.updatePlant(res);
      this.setState({ redirect: true });
    } else if (res.list.length === 0) {
      //no plants found
      this.props.updatePlant("not found");
    } else {
      //counts total match of keywords
      for (let plant of res.list) {
        let count = 0;
        for (let tk of res.tokens) {
          console.log(tk);
          let kw = plant.frequency[tk];
          if (kw) count += kw;
        }
        plant.count = count;
      }

      //sorts list
      res.list.sort((a, b) => {
        return a.count == b.count ? 0 : a.count > b.count ? -1 : 1;
      });

      //list of plants, keyword provided
      this.props.updatePlant(res.list);
      this.setState({ redirect: true });
    }
  }

  async getRandom(e) {
    e.preventDefault();
    this.fetchPlant("/api/plant/random");
  }

  async getAll(e) {
    e.preventDefault();
    this.fetchPlant("/api/plant/all");
  }

  onSubmit(e) {
    e.preventDefault();
    this.fetchPlant("/api/plant/search/" + this.state.query);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    if (this.state.redirect) return <Redirect push to="/list" />;

    return (
      <div className="secondary-container">
        <div className="super-title padded-bottom">Search</div>
        <div className="table-container">
          Enter your search:
          <form>
            <Input
              type="text"
              name="query"
              fn={this.handleChange}
              obj={this.state}
              autoComplete="off"
            />
            <Button submit={true} value="Search" fn={this.onSubmit} />
            <Button submit={true} value="Random" fn={this.getRandom} />
            <Button submit={true} value="All" fn={this.getAll} />
          </form>
        </div>

        {this.props.plant === "not found" ? (
          <div>No such plant found.</div>
        ) : (
          <div />
        )}
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
)(Search);
