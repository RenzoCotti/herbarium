import React, { Component } from "react";
import { capitalise } from "../../../utility/utility";

import "../style/Media.css";

class Media extends Component {
  state = {
    showing: 0
  };

  constructor(props) {
    super(props);
    this.getSrc = this.getSrc.bind(this);
    this.getSide = this.getSide.bind(this);
    this.getCaption = this.getCaption.bind(this);
    this.switchImage = this.switchImage.bind(this);
  }

  getCaption() {
    let show = this.state.showing;
    return this.props.plant.images[show].caption;
  }

  getSrc() {
    let show = this.state.showing;
    console.log(this.props.plant);
    return this.props.plant.images[show].url;
  }

  getSide() {
    let imgs = this.props.plant.images;

    let classSelected = "secondary-image selected-image";
    let classSecondary = "secondary-image";

    return imgs.map((img, index) => {
      if (img.url === "") return "";
      return (
        <img
          src={img.url}
          className={
            img.type === this.state.showing ? classSelected : classSecondary
          }
          key={img.url}
          alt=""
          onClick={() => this.switchImage(index)}
        />
      );
    });
  }

  switchImage(ev) {
    this.setState({ showing: ev });
  }

  render() {
    return (
      <div className="secondary-container">
        <div className="image-container">
          <img className="main-image" src={this.getSrc()} alt="" />
          <div className="side-images">{this.getSide()}</div>
        </div>
        <div className="main-image-subtitle">
          {capitalise(this.getCaption())}
        </div>
      </div>
    );
  }
}

export default Media;
