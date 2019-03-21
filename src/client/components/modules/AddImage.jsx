import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import TextArea from "./input/TextArea";
import ItemList from "./ItemList";

class AddImage extends Component {
  state = { url: "", caption: "", index: -1, edit: false };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createEntry = this.createEntry.bind(this);
    this.setEntry = this.setEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.clear = this.clear.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  removeEntry(e) {
    let index = e.target.getAttribute("index");
    let list = this.props.images;
    list.splice(index, 1);

    this.props.fn(list);
    this.clear();
  }

  setEntry(e) {
    let index = e.target.getAttribute("index");
    let image = this.props.images[index];
    this.setState({
      url: image.url,
      caption: image.caption,
      edit: true,
      index: index
    });
  }

  createEntry() {
    let entry = {
      url: this.state.url,
      caption: this.state.caption
    };

    let list = this.props.images;
    list.push(entry);
    this.props.fn(list);
    this.clear();
  }

  editEntry() {
    let currentIndex = this.state.index;
    let newImages = this.props.st.images;
    newImages[currentIndex] = {
      url: this.state.url,
      caption: this.state.caption
    };
    this.props.fn(newImages);
    this.clear();
  }

  clear() {
    this.setState({ url: "", caption: "", index: -1, edit: false });
  }

  render() {
    return (
      <div>
        <div className="title padded-bottom padded-top">Images</div>
        <ItemList
          list={this.props.images}
          set={this.setEntry}
          remove={this.removeEntry}
          name="Image"
        />
        <div>
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
        {this.state.edit ? (
          <Button value="Edit" button={true} fn={this.editEntry} />
        ) : (
          <Button value="Add" button={true} fn={this.createEntry} />
        )}

        <Button value="Clear" button={true} fn={this.clear} />
      </div>
    );
  }
}

export default AddImage;
