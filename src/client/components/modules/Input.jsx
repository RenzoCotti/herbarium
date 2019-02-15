import React from "react";

const Input = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <input
        className={props.text ? "forms shortForm" : "forms"}
        type="text"
        name={props.name}
        onChange={props.fn}
        autoComplete="off"
      />
      {props.text ? props.text : ""}
    </div>
  </div>
);

export default Input;
