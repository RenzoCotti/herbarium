import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { updatePlant, getPlant, updateList } from "../../redux/actions";
import Button from "./input/Button";

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

  async fetchPlant(url) {
    let req = await fetch(url);
    let res = await req.json();

    if (res.list.length === 0) {
      this.setState({ notFound: true })
    } else if (res.tokens.length === 0) {
      //list of plants, no keyword provided
      this.props.updateList(res.list);
      this.setState({ redirect: true });
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
      this.props.updateList(res.list);
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
        <div className="sub-title padded-top">Enter your search:</div>
        <form>
          <input
            className="search"
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button value="Search" fn={this.onSubmit} />
            <Button value="Random" fn={this.getRandom} />
            <Button value="All" fn={this.getAll} />
          </div>
        </form>

        {this.state.notFound ? (
          <div>No such plant found.</div>
        ) : (
            <div />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state),
});

const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlant(plant)),
  updateList: list => dispatch(updateList(list))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
