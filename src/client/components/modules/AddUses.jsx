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
    errors: [],
    edibility: "",
    comment: "",
    medicalProperties: [],
    title: "",
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
    this.validate = this.validate.bind(this);
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
          type: e.target.value.toLowerCase(),
          edibility: "",
          comment: "",
          medicalProperties: "",
          title: ""
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
    let index = e.target.getAttribute("index");
    let list = this.props.uses;
    list.splice(index, 1);
    this.props.fn(list);
    this.clear();
  }

  setEntry(e) {
    let index = e.target.getAttribute("index");
    let use = this.props.uses[index];

    let temp = {
      part: use.part,
      comment: use.comment,
      type: use.title,
      medicalProperties: use.medicalProperties,
      edibility: use.edibility,
      edit: true,
      index: index
    };


    if (use.title === "other") {
      temp.type = "other"
      temp.title = use.title;
    } else {
      temp.type = use.title
    }

    this.setState(temp);
  }

  createEntry() {
    if (!this.validate()) return;

    let entry = {
      part: this.state.part,
      comment: this.state.comment,
      title: this.state.type
    };
    switch (this.state.type) {
      case "edibility":
        entry.edibility = this.state.edibility;
        break;
      case "medical":
        entry.medicalProperties = this.state.medicalProperties;
        break;
      case "other":
        entry.title = this.state.title;
        break;
      default:
        return;
    }

    let list = this.props.uses;
    list.push(entry);
    this.props.fn(list);
    this.clear();
  }

  editEntry() {
    if (!this.validate()) return;

    let currentIndex = this.state.index;
    let newUses = this.props.uses;

    let entry = {
      part: this.state.part,
      comment: this.state.comment,
      title: this.state.type
    };
    switch (this.state.type) {
      case "edibility":
        entry.edibility = this.state.edibility;
        break;
      case "medical":
        entry.medicalProperties = this.state.medicalProperties;
        break;
      case "other":
        entry.title = this.state.title;
        break;
      default:
        return;
    }

    newUses[currentIndex] = entry;
    this.props.fn(newUses);
    this.clear();
  }

  clear() {
    this.setState({
      part: "",
      type: "",
      edibility: "",
      comment: "",
      medicalProperties: "",
      title: "",
      index: -1,
      edit: false,
      errors: []
    });
  }

  validate() {
    let arr = [];
    if (!this.state.part) {
      arr.push({ name: "part" })
    } else if (this.state.part.length > 100) {
      arr.push({ name: "part", errorMessage: "Please input a shorter plant part." })
    } else {
      if (!this.state.type) {
        arr.push({ name: "type" })
      } else {
        switch (this.state.type) {
          case "edibility":
            if (!this.state.edibility) {
              arr.push({ name: "edibility" })
            }
            break;
          case "medical":
            if (!this.state.medicalProperties || this.state.medicalProperties.length === 0) {
              arr.push({ name: "medicalProperties" })
            }
            break;
          case "other":
            if (!this.state.title) {
              arr.push({ name: "title" })
            } else if (this.state.title.length > 32) {
              arr.push({ name: "title", errorMessage: "Please input a shorter title." })
            }
        }

        if (!this.state.comment) {
          arr.push({ name: "comment" })
        } else if (this.state.comment.length > 150) {
          arr.push({ name: "comment", errorMessage: "Please input a shorter comment." })
        }
      }


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
            errors={this.state.errors}
          />
          {this.state.part ? (
            <Select
              label="Type: *"
              name="type"
              fn={this.handleSelect}
              obj={this.state}
              arr={["Edibility", "Medical", "Other"]}
              errors={this.state.errors}
            />
          ) : (
              ""
            )}

          {this.state.type === "edibility" ? (
            <Select
              label="Edibile: *"
              name="edibility"
              fn={this.handleSelect}
              obj={this.state}
              arr={definitions.edibility}
              errors={this.state.errors}
            />
          ) : (
              ""
            )}
          {this.state.type === "medical" ? (
            <MultiSelect
              label="Medical Properties: *"
              name="medicalProperties"
              fn={this.handleSelect}
              obj={this.state}
              arr={definitions.medicalProperties}
              errors={this.state.errors}
            />
          ) : (
              ""
            )}
          {this.state.type === "other" ? (
            <Input
              label="Title: *"
              name="title"
              fn={this.handleChange}
              obj={this.state}
              errors={this.state.errors}
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
              errors={this.state.errors}
            />
          ) : (
              ""
            )}
        </div>
        {this.state.edit ? (
          <Button value="Edit" fn={this.editEntry} />
        ) : (
            <Button value="Add" fn={this.createEntry} />
          )}

        <Button value="Clear" fn={this.clear} />
      </div>
    );
  }
}

export default AddUses;
