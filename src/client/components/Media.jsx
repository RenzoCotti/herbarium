import React, { Component } from "react";

import "./style/Media.css";

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
    console.log("herel lulu");
    console.log(this.props.plant);
    return this.props.plant.images[show].url;
  }

  getSide() {
    let arr = [];

    let imgs = this.props.plant.images;

    Object.keys(imgs).forEach(function(key, index) {
      arr.push({ type: key, url: imgs[key] });
    });

    let classSelected = "secondary-image selected-image";
    let classSecondary = "secondary-image";

    return arr.map(tuple => {
      if (tuple.url === "") return "";
      return (
        <img
          src={tuple.url}
          className={
            tuple.type === this.state.showing ? classSelected : classSecondary
          }
          key={tuple.url}
          alt=""
          onClick={() => this.switchImage(tuple.type)}
        />
      );
    });
  }

  switchImage(ev) {
    this.setState({ showing: ev });
  }

  render() {
    return (
      <div className="media-container">
        <div className="image-container">
          <img className="main-image" src={this.getSrc()} alt="" />
          <div className="side-images">{this.getSide()}</div>
        </div>
        <div className="main-image-subtitle">
          {this.getCaption()} {this.props.plant.common}
        </div>
      </div>
    );
  }
}

export default Media;
