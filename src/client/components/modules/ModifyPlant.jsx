import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, updatePlant, updateEdit } from "../../redux/actions";
import { Redirect } from "react-router";

import CreateGeneral from "../createView/CreateGeneral";
import CreateStem from "../createView/CreateStem";
import CreateLeaves from "../createView/CreateLeaves";
import CreateFlowersFruit from "../createView/CreateFlowersFruit";
import AddImage from "./AddImage";
import AddUses from "./AddUses";
import Button from "./input/Button";

class ModifyPlant extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.validate = this.validate.bind(this);

    //we're initialising the state for the controlled component
    if (this.props.edit && this.props.plant) {
      let obj = Object.assign({}, this.props.plant);
      this.state = obj;
    } else {
      this.state = {
        latinName: "",
        commonName: "",
        plantType: "",
        evergreen: "",
        description: "",
        height: "",
        regions: [],
        habitat: "",
        stemColour: "",
        stemTexture: "",
        stemDescription: "",
        leafShape: "",
        leafDescription: "",
        leafMargin: "",
        leafVenation: "",
        leafArrangement: "",
        leafLength: "",
        flowerColour: "",
        flowerDescription: "",
        bloomMonth: [],
        fruitColour: "",
        fruitDescription: "",
        fruitSize: "",
        uses: [],
        images: []
      };
    }
  }

  componentWillUnmount() {
    this.props.updateEdit(undefined);
  }

  validate() {
    let arr = [];

    if (!this.state.latinName) {
      arr.push({ name: "latinName" })
    } else if (this.state.commonName.length > 64) {
      arr.push({ name: "latinName", errorMessage: "Please insert a shorter name." })
    }
    if (!this.state.commonName) {
      arr.push({ name: "commonName" })
    } else if (this.state.commonName.length > 30) {
      arr.push({ name: "commonName", errorMessage: "Please insert a shorter name." })
    }
    if (!this.state.plantType) {
      arr.push({ name: "plantType" })
    }
    if (!this.state.evergreen) {
      arr.push({ name: "evergreen" })
    }
    if (this.state.description && this.state.description.length > 300) {
      arr.push({ name: "description", errorMessage: "Please insert a shorter description." })
    }
    if (!this.state.regions || this.state.regions.length === 0) {
      arr.push({ name: "regions" })
    }
    if (!this.state.habitat) {
      arr.push({ name: "habitat" })
    } else if (this.state.habitat.length > 100) {
      arr.push({ name: "habitat", errorMessage: "Please insert a shorter habitat." })
    }
    if (!this.state.height) {
      arr.push({ name: "height" })
    } else if (isNaN(this.state.height)) {
      arr.push({ name: "height", errorMessage: "Only numbers please." })
    } else if (this.state.height > 300 || this.state.height < 0) {
      arr.push({ name: "height", errorMessage: "Please insert a value between 0-300 metres." })
    }


    if (!this.state.stemColour) {
      arr.push({ name: "stemColour" })
    }
    if (!this.state.stemTexture) {
      arr.push({ name: "stemTexture" })
    }
    if (this.state.stemDescription && this.state.stemDescription.length > 150) {
      arr.push({ name: "stemDescription", errorMessage: "Please insert a shorter description." })
    }


    if (!this.state.leafShape) {
      arr.push({ name: "leafShape" })
    }
    if (!this.state.leafMargin) {
      arr.push({ name: "leafMargin" })
    }
    if (!this.state.leafArrangement) {
      arr.push({ name: "leafArrangement" })
    }
    if (!this.state.leafVenation) {
      arr.push({ name: "leafVenation" })
    }
    if (!this.state.leafLength) {
      arr.push({ name: "leafLength" })
    } else if (isNaN(this.state.leafLength)) {
      arr.push({ name: "leafLength", errorMessage: "Only numbers please." })
    } else if (this.state.leafLength > 300 || this.state.leafLength < 0) {
      arr.push({ name: "leafLength", errorMessage: "Please insert a value between 0-300 metres." })
    }
    if (this.state.leafDescription && this.state.leafDescription.length > 100) {
      arr.push({ name: "leafDescription", errorMessage: "Please insert a shorter description." })
    }


    if (this.state.flowerDescription && this.state.flowerDescription.length > 150) {
      arr.push({ name: "flowerDescription", errorMessage: "Please insert a shorter description." })
    }


    if (this.state.fruitDescription && this.state.fruitDescription.length > 150) {
      arr.push({ name: "fruitDescription", errorMessage: "Please insert a shorter description." })
    }

    if (this.state.fruitSize && isNaN(this.state.fruitSize)) {
      arr.push({ name: "fruitSize", errorMessage: "Only numbers please." })
    } else if (this.state.fruitSize && (this.state.fruitSize > 300 || this.state.fruitSize < 0)) {
      arr.push({ name: "fruitSize", errorMessage: "Please insert a value between 0-300 ccentimetres." })
    }

    if (arr.length === 0) {
      this.props.fn(this.state)
    } else {
      this.setState({ errors: arr })
    }
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
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

  render() {
    let change = this.handleChange;
    let select = this.handleSelect;

    //doesn't display the page if the user isnt logged
    if (!this.props.login)
      return (
        <div className="secondary-container">
          <div className="super-title padded-bottom">
            {this.props.edit ? "Edit Plant" : "Create New Plant"}
          </div>
          You need to be an admin to view this page.
        </div>
      );

    //redirects home if necessary
    if (this.state.toHome) {
      return <Redirect push to="/" />;
    }


    console.log(this.state)
    return (
      <div style={{ width: "100%", padding: "50px" }}>
        <div className="super-title padded-bottom">
          {this.props.edit ? "Edit Plant" : "Create New Plant"}
        </div>

        <form>
          <div className="createForm">
            <div className="table-container">
              <CreateGeneral change={change} select={select} obj={this.state} errors={this.state.errors} />
              <CreateStem change={change} select={select} obj={this.state} errors={this.state.errors} />
              <CreateLeaves change={change} select={select} obj={this.state} errors={this.state.errors} />
            </div>

            <div className="table-container">
              <CreateFlowersFruit
                change={change}
                select={select}
                obj={this.state}
                errors={this.state.errors}
              />
              <AddImage
                images={this.state.images}
                fn={lst => this.setState({ images: lst })}
              />
              <AddUses
                uses={this.state.uses}
                fn={lst => this.setState({ uses: lst })}
              />
              <br />
            </div>
          </div>

          <Button value="Confirm" fn={this.validate} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: getLogin(state)
});
const mapDispatchToProps = dispatch => ({
  updatePlant: plant => dispatch(updatePlant(plant)),
  updateEdit: plant => dispatch(updateEdit(plant))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyPlant);
