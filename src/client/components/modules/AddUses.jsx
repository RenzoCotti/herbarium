import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import Select from "./input/Select";
import MultiSelect from "./input/MultiSelect";
import TextArea from "./input/TextArea";
import ItemList from "./ItemList";
import definitions from "../../../utility/definitions";

class AddUses extends Component {
  state = {
    index: -1,
    edit: false,
    edibility: "",
    comment: "",
    medProperties: [],
    otherTitle: "",
    part: ""
  };

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(e, name, multi) {
    if (!multi) {
      if (name === "type") {
        //wipe previous results
        this.setState({
          type: e.target.value,
          edibility: "",
          comment: "",
          medProperties: "",
          otherTitle: ""
        });
      } else {
        this.setState({
          [name]: e.target.value
        });
      }

      return;
    }

    let temp = [];
    for (let a of e.target.selectedOptions) {
      temp.push(a.value);
    }

    this.setState({
      [name]: temp
    });
  }

  removeEntry(e) {
    // let index = e.target.getAttribute("index");
    // let list = this.props.images;
    // list.splice(index, 1);
    // this.props.fn(list);
    // this.clear();
  }

  setEntry(e) {
    // let index = e.target.getAttribute("index");
    // let image = this.props.images[index];
    // this.setState({
    //   url: image.url,
    //   caption: image.caption,
    //   edit: true,
    //   index: index
    // });
  }

  createEntry() {
    let entry = {
      partOfPlant: this.state.part,
      comment: this.state.comment
    };
    switch (this.state.type) {
      case "Edibility":
        entry.edibility = this.state.edibility;
        break;
      case "Medicinal":
        entry.medProperties = this.state.medProperties;
        break;
      case "Other":
        entry.otherTitle = this.state.otherTitle;
        break;
      default:
        return;
    }

    console.log(entry);
    // let entry = {
    //   url: this.state.url,
    //   caption: this.state.caption
    // };
    // let list = this.props.images;
    // list.push(entry);
    // this.props.fn(list);
    // this.clear();
  }

  editEntry() {
    // let currentIndex = this.state.index;
    // let newImages = this.props.st.images;
    // newImages[currentIndex] = {
    //   url: this.state.url,
    //   caption: this.state.caption
    // };
    // this.props.fn(newImages);
    // this.clear();
  }

  clear() {
    // this.setState({ url: "", caption: "", index: -1, edit: false });
  }

  render() {
    return (
      <div>
        <div className="title padded-bottom padded-top">Uses</div>
        <ItemList
          list={this.props.uses}
          set={this.setEntry}
          remove={this.removeEntry}
        />
        <div>
          <Input
            label="Plant part: *"
            name="part"
            fn={this.handleChange}
            obj={this.state}
          />
          <Select
            label="Type: *"
            name="type"
            fn={this.handleSelect}
            obj={this.state}
            arr={["Edibility", "Medicinal", "Other"]}
          />

          {this.state.type === "Edibility" ? (
            <Select
              label="Edibile: *"
              name="edibility"
              fn={this.handleSelect}
              obj={this.state}
              arr={["Yes", "No", "Toxic"]}
            />
          ) : (
            ""
          )}
          {this.state.type === "Medicinal" ? (
            <MultiSelect
              label="Medical Properties: *"
              name="medProperties"
              fn={this.handleSelect}
              obj={this.state}
              arr={definitions.medicinalProperties}
            />
          ) : (
            ""
          )}
          {this.state.type === "Other" ? (
            <Input
              label="Title: *"
              name="otherTitle"
              fn={this.handleChange}
              obj={this.state}
            />
          ) : (
            ""
          )}

          {this.state.type ? (
            <TextArea
              label="Comment: *"
              name="comment"
              fn={this.handleChange}
              obj={this.state}
            />
          ) : (
            ""
          )}
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

export default AddUses;
