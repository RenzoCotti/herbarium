import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { capitalise } from "../../../utility/utility";
import { updatePlantFromIndex, updatePlant, getPlant, getList } from "../../redux/actions";
import Button from "./input/Button";

class List extends Component {
  state = {
    redirect: false,
    page: 1,
    max: 1,
    perPage: 5
  };

  constructor(props) {
    super(props);
    this.goToPlant = this.goToPlant.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.addToPage = this.addToPage.bind(this);
  }

  componentDidMount() {
    if (!this.props.list) return;

    if (this.props.list.length === 1) {
      this.props.updatePlantFromIndex(0);
      this.setState({ redirect: true });
      return;
    }

    this.setState({ max: Math.ceil(this.props.list.length / this.state.perPage) })


    // if (list.length > 0 && list[0].count) {
    //   list = list.sort((a, b) => {
    //     if (a.commonName == b.commonName) {
    //       return 0;
    //     } else {
    //       return a.commonName < b.commonName ? -1 : 1;
    //     }
    //   })
    // }
  }

  async goToPlant(e, i) {
    this.props.updatePlantFromIndex(i);
    this.setState({ redirect: true });
  }

  goToPage(n) {
    this.setState({ page: n })
  }

  addToPage(n) {
    let num = this.state.page + n;
    if (num < 1) num = 1;
    else if (num > this.state.max) num = this.state.max;
    this.setState({ page: num })
  }

  renderList() {
    let list = this.props.list;
    let begin = this.state.perPage * this.state.page - this.state.perPage;
    list = list.slice(begin, begin + this.state.perPage)

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
          {this.renderList()}
        </div>
        <div className="list-pages">
          <Button value="<<" fn={() => this.goToPage(1)} />
          <Button value="<" fn={() => this.addToPage(-1)} />
          <div style={{ flexGrow: 1, textAlign: "center" }}>Page {this.state.page} of {this.state.max}</div>
          <Button value=">" fn={() => this.addToPage(+1)} />
          <Button value=">>" fn={() => this.goToPage(this.state.max)} />
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
