import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import TextArea from "./input/TextArea";
import ItemList from "./ItemList";

class AddImage extends Component {
  state = { url: "", caption: "", index: -1, edit: false, errors: [] };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createEntry = this.createEntry.bind(this);
    this.setEntry = this.setEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.clear = this.clear.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.validate = this.validate.bind(this);
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
    if (!this.validate()) return;
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
    if (!this.validate()) return;

    let currentIndex = this.state.index;
    let newImages = this.props.images;
    newImages[currentIndex] = {
      url: this.state.url,
      caption: this.state.caption
    };
    this.props.fn(newImages);
    this.clear();
  }

  clear() {
    this.setState({ url: "", caption: "", index: -1, edit: false, errors: [] });
  }

  validate() {
    let arr = [];
    if (!this.state.url) {
      arr.push({ name: "url" })
    }

    if (!this.state.caption) {
      arr.push({ name: "caption" })
    }

    if (arr.length !== 0) {
      this.setState({ errors: arr })
      return false;
    } else {
      return true;
    }
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
            errors={this.state.errors}
          />
          <TextArea
            label="Caption: *"
            name="caption"
            fn={this.handleChange}
            obj={this.state}
            errors={this.state.errors}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <img
            src={this.state.url}
            alt="No preview available"
            className={
              this.state.url ? "secondary-image" : "secondary-image padded"
            }
            style={{ minWidth: "200px", minHeight: "200px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px"
            }}
          >
            {this.state.edit ? (

              <Button value="Edit" fn={this.editEntry} />
            ) : (
                <Button value="Add" fn={this.createEntry} />
              )}
            <Button value="Clear" fn={this.clear} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddImage;
