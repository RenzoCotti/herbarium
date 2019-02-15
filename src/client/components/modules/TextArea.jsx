import React, { Component } from "react";

const TextArea = props => (
  <div className="row-table">
    <div className="label-table sub-title">{props.label}</div>
    <div className="content-table">
      <textarea
        className="forms"
        type="text"
        name={props.name}
        onChange={props.fn}
        autoComplete="off"
      />
    </div>
  </div>
);

export default TextArea;
