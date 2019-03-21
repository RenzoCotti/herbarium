import React from "react";
import Button from "./input/Button";

const ItemList = props => {
  if (!props.list) return <div className="image-list margin-bottom" />;

  let temp = props.list.map((el, index) => (
    <div className="image-list-entry" key={index}>
      <div
        onClick={props.set}
        className="image-list-label padded"
        index={index}
      >
        {props.name} {index + 1}
      </div>
      <Button fn={props.remove} button={true} value="Delete" index={index} />
    </div>
  ));

  return <div className="image-list margin-bottom">{temp}</div>;
};

export default ItemList;
