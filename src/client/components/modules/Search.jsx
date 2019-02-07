import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlantAction, getPlant } from "../../redux/actions";

class Search extends Component {
  query = "";
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchPlant = this.fetchPlant.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  async fetchPlant(url) {
    let req = await fetch(url);
    let res = await req.json();

    if (res.list.length === 0) {
      //no plants found
      this.props.updatePlant(-1);
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

      this.props.updatePlant(res.list);
    }
  }

  async getRandom(e) {
    e.preventDefault();
    this.fetchPlant("/api/random");
  }

  onSubmit(e) {
    e.preventDefault();
    this.fetchPlant("/api/search/" + this.query);
  }

  handleChange(e) {
    this.query = e.target.value;
  }

  render() {
    return (
      <div className="secondary-container">
        <div className="super-title padded-bottom">Search</div>
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
        {this.props.plant === -1 ? <div>No such plant found.</div> : <div />}
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
