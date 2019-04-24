import React, { Component } from "react";
import { capitalise } from "../../../utility/utility";

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
    let current = this.props.plant.images;
    if (current.length > 0) return current[show].caption;
    return "";
  }

  getSrc() {
    let show = this.state.showing;
    let current = this.props.plant.images;
    if (current.length > 0) return current[show].url;
    else return "./public/images/leaf_placeholder.jpg";
  }

  getSide() {
    let imgs = this.props.plant.images;

    let classSelected = "secondary-image selected-image";
    let classSecondary = "secondary-image";

    let list = imgs.map((img, index) => {
      if (img.url === "") return "";
      return (
        <img
          src={img.url}
          className={
            index === this.state.showing ? classSelected : classSecondary
          }
          key={img.url}
          alt=""
          onClick={() => this.switchImage(index)}
        />
      );
    });

    let width = Math.round(list.length / 3);

    return <div className="side-images" style={{ width: (width * 90) + "px" }}>{list}</div>

  }

  switchImage(ev) {
    this.setState({ showing: ev });
  }

  render() {
    return (
      <div className="media-container">
        <div className="image-container">
          <img className="main-image" src={this.getSrc()} alt="" />
          {this.getSide()}
        </div>
        <div className="main-image-subtitle">
          {capitalise(this.getCaption())}
        </div>
      </div>
    );
  }
}

export default Media;
