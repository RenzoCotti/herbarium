import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { capitalise } from "../../../utility/utility";
import { updatePlantFromIndex, updatePlant, getPlant, getList } from "../../redux/actions";

class List extends Component {
  state = {
    redirect: false
  };

  constructor(props) {
    super(props);
    this.goToPlant = this.goToPlant.bind(this);
  }

  componentDidMount() {
    if (this.props.list.length === 1) {
      this.props.updatePlantFromIndex(0);
      this.setState({ redirect: true });
    }
  }

  async goToPlant(e, i) {
    this.props.updatePlantFromIndex(i);
    this.setState({ redirect: true });
  }

  renderList(list) {

    console.log(list)
    if (list.length > 0 && list[0].count) {
      list = list.sort((a, b) => {
        if (a.commonName == b.commonName) {
          return 0;
        } else {
          return a.commonName < b.commonName ? -1 : 1;
        }
      })
    }

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
                : "./public/images/leaf_placeholder.jpg"
            }
            className="secondary-image"
            alt=""
          />
          <span className="label-list padded-left">
            {/*for debug purposes added plant.count*/}
            {capitalise(plant.commonName) +
              (plant.count ? " - " + plant.count : "")}
          </span>
        </div>
      );
    });
  }

  render() {
    if (!this.props.list) { return <Redirect push to="/" />; }

    if (this.state.redirect) { return <Redirect push to="/plant/" />; }


    console.log(this.props.list)


    return (
      <div className="secondary-container" style={{ width: "100%" }}>
        <div className="super-title margin-bottom">Results</div>
        <div className="list-container">
          {this.renderList(this.props.list)}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plant: getPlant(state),
  list: getList(state)
});

const mapDispatchToProps = dispatch => ({
  updatePlantFromIndex: id => dispatch(updatePlantFromIndex(id)),
  updatePlant: id => dispatch(updatePlant(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
