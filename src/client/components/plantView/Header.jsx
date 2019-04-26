import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlant, getLogin, updateEdit } from "../../redux/actions";
import { Redirect } from "react-router";

import Button from "../modules/input/Button";
import { capitaliseString } from "../../../utility/utility";

//where, overall appearance, details, season

class Description extends Component {
    state = { login: undefined };

    constructor(props) {
        super(props);
        this.deletePlant = this.deletePlant.bind(this);
        this.editPlant = this.editPlant.bind(this);
    }


    async deletePlant() {
        // console.log("deleting");
        let req = await fetch("/api/plant/delete/" + this.props.plant._id, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        let res = await req.text();
        if (res === "deleted") {
            this.props.updatePlant("deleted");
        }
    }

    editPlant() {
        this.props.updateEdit(this.props.plant);
        this.setState({ edit: true })
    }

    render() {
        let plant = this.props.plant;

        //the edit button has been pressed, go to edit page
        if (this.state.edit) return <Redirect push to="/edit" />;

        return (
            <div className="desc-header">
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span className="plantName">
                        {capitaliseString(plant.commonName)}
                    </span>
                    <span className="sub-title">
                        {" (" + capitaliseString(plant.latinName) + ")"}
                    </span>
                </div>

                {/* if the user is logged, show the edit and delete buttons */}
                {this.props.login ? (
                    <div className="modify-plant">
                        <Button value="Delete" fn={this.deletePlant} />
                        <Button value="Edit" fn={this.editPlant} />
                    </div>
                ) : (
                        ""
                    )}
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
)(Description);
