import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import TextArea from "./input/TextArea";
import { connect } from "react-redux";
import { updateImages, getImages, getPlant } from "../../redux/actions";

class AddImage extends Component {
  state = { url: "", caption: "", index: -1, edit: false };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderList = this.renderList.bind(this);
    this.createEntry = this.createEntry.bind(this);
    this.setEntry = this.setEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.clear = this.clear.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }

  componentDidMount() {
    if (this.props.plant && this.props.plant.length === 1)
      this.props.updateImages(this.props.plant[0].images);
    else this.props.updateImages([]);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  renderList() {
    let list = this.props.images;
    if (!list) return;

    return list.map((el, index) => {
      return (
        <div className="image-list-entry padded" key={index}>
          <div onClick={e => this.setEntry(el.url, el.caption, index)}>
            Image {index + 1}
          </div>
          <Button onClick={e => this.removeEntry(e, index)} value="Delete" />
        </div>
      );
    });
  }

  removeEntry(e, index) {
    let list = this.props.images;
    list.splice(index, 1);

    this.props.updateImages(list);
    this.clear();
  }

  setEntry(b, c, i) {
    this.setState({ url: b, caption: c, edit: true, index: i });
  }

  createEntry() {
    let entry = {
      url: this.state.url,
      caption: this.state.caption
    };

    let list = this.props.images;
    list.push(entry);
    this.props.updateImages(list);
    this.clear();
  }

  editEntry() {
    let currentIndex = this.state.index;
    let newImages = this.props.images;
    newImages[currentIndex] = {
      url: this.state.url,
      caption: this.state.caption
    };
    this.props.updateImages(newImages);
    this.clear();
  }

  clear() {
    this.setState({ url: "", caption: "", index: -1, edit: false });
  }

  render() {
    return (
      <div>
        <div className="title padded-bottom padded-top">Images</div>
        <div className="image-list margin-bottom">{this.renderList()}</div>
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

const mapStateToProps = state => ({
  images: getImages(state),
  plant: getPlant(state)
});

const mapDispatchToProps = dispatch => ({
  updateImages: arr => dispatch(updateImages(arr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddImage);
