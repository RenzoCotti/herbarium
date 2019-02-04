import React, { Component } from "react";
import "./style/categories.css";

import { capitalise } from "../../utility/utility";

class Category extends Component {
  state = { show: false };

  constructor(props) {
    super(props);
    this.showList = this.showList.bind(this);
  }

  showList() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  getClass() {
    if (this.state.show) {
      return "category-list";
    } else {
      return "category-list-hidden";
    }
  }

  render() {
    return (
      <div className="category-container">
        <div className="category-label" onClick={this.showList}>
          {this.props.name}
        </div>
        <div className={this.getClass()}>
          {this.props.list.map(k => {
            return (
              <div className="category-link" key={k}>
                {capitalise(k)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Category;
