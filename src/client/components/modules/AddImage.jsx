import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import TextArea from "./input/TextArea";

class AddImage extends Component {
  state = { imageName: "", url: "", caption: "", list: [] };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderList = this.renderList.bind(this);
    this.createEntry = this.createEntry.bind(this);
    this.setEntry = this.setEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  renderList() {
    let list = this.state.list;

    return list.map((el, index) => {
      return (
        <div className="image-list-entry padded" key={el.imageName}>
          <div onClick={e => this.setEntry(el.imageName, el.url, el.caption)}>
            {el.imageName}
          </div>
          <div onClick={e => this.removeEntry(e, index)}>X</div>
        </div>
      );
    });
  }

  removeEntry(e, index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  }

  setEntry(a, b, c) {
    this.setState({ imageName: a, url: b, caption: c });
  }

  createEntry() {
    let entry = {
      imageName: this.state.imageName,
      url: this.state.url,
      caption: this.state.caption
    };

    let list = this.state.list;
    list.push(entry);
    this.setState({ list: list });
    this.clear();
  }

  clear() {
    this.setState({ imageName: "", url: "", caption: "" });
  }

  render() {
    return (
      <div>
        <div className="title padded-bottom padded-top">Images</div>
        <div className="image-list margin-bottom">{this.renderList()}</div>
        <div>
          <Input
            label="Name: *"
            name="imageName"
            fn={this.handleChange}
            obj={this.state}
          />
          <Input
            label="URL: *"
            name="url"
            fn={this.handleChange}
            obj={this.state}
          />
          <TextArea
            label="Caption: *"
            name="caption"
            fn={this.handleChange}
            obj={this.state}
          />

          <img
            src={this.state.url}
            alt="No preview available"
            className="secondary-image"
          />
        </div>
        <Button value="Add" button={true} fn={this.createEntry} />
        <Button value="Clear" button={true} fn={this.clear} />
      </div>
    );
  }
}

export default AddImage;
