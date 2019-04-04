import React, { Component } from "react";
import Button from "./input/Button";
import Input from "./input/Input";
import Select from "./input/Select";
import TextArea from "./input/TextArea";
import ItemList from "./ItemList";
import definitions from "../../../utility/definitions";

class AddUses extends Component {
  state = { url: "", caption: "", index: -1, edit: false };

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
    console.log(this.state);
  }

  handleSelect(e, name, multi) {
    if (!multi) {
      this.setState({
        [name]: e.target.value
      });
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
    let temp = this.state.medcat;
    let medToDisplay;

    switch (temp) {
      case "General":
        medToDisplay = definitions.medicinalGeneral;
        break;
      case "Anti-Pathogens":
        medToDisplay = definitions.medicinalPathogens;
        break;
      case "Digestive":
        medToDisplay = definitions.medicinalDigestive;
        break;
      case "Respiratory":
        medToDisplay = definitions.medicinalRespiratory;
        break;
      case "Circulatory":
        medToDisplay = definitions.medicinalCirculatory;
        break;
      case "Nervous System":
        medToDisplay = definitions.medicinalNervous;
        break;
    }
    return (
      <div>
        <div className="title padded-bottom padded-top">Uses</div>
        <ItemList
          list={this.props.uses}
          set={this.setEntry}
          remove={this.removeEntry}
          name="Image"
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
            <React.Fragment>
              <Select
                label="Edibile: *"
                name="edibility"
                fn={this.handleSelect}
                obj={this.state}
                arr={["Yes", "No", "Toxic"]}
              />
              <TextArea
                label="Comment: *"
                name="edibilityComment"
                fn={this.handleChange}
                obj={this.state}
              />
            </React.Fragment>
          ) : (
            ""
          )}
          {this.state.type === "Medicinal" ? (
            <React.Fragment>
              <Select
                label="Medical Category: *"
                name="medcat"
                fn={this.handleSelect}
                obj={this.state}
                arr={[
                  "General",
                  "Anti-Pathogens",
                  "Digestive",
                  "Respiratory",
                  "Circulatory",
                  "Nervous System"
                ]}
              />

              {medToDisplay ? (
                <Select
                  label="Medical Property: *"
                  name="medProperty"
                  fn={this.handleSelect}
                  obj={this.state}
                  arr={medToDisplay}
                />
              ) : (
                ""
              )}
            </React.Fragment>
          ) : (
            ""
          )}
          {this.state.type === "Other" ? (
            <React.Fragment>
              <Input
                label="Title: *"
                name="title"
                fn={this.handleChange}
                obj={this.state}
              />
              <TextArea
                label="Comment: *"
                name="otherComment"
                fn={this.handleChange}
                obj={this.state}
              />
            </React.Fragment>
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
