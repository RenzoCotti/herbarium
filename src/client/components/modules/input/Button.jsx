import React from "react";

const Button = props => {
  return (
    <input
      type={props.button ? "button" : "submit"}
      value={props.value}
      onClick={props.fn}
      className="button"
    />
  );
};

export default Button;
