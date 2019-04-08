import React from "react";
import Button from "./input/Button";
import { capitalise } from "../../../utility/utility";

const ItemList = props => {
  if (!props.list) return <div className="image-list margin-bottom" />;

  let temp = props.list.map((el, index) => {
    return (
      <div className="image-list-entry" key={index}>
        <div
          onClick={props.set}
          className="image-list-label padded"
          index={index}
        >
          {props.name
            ? props.name + (index + 1)
            : capitalise(el.part) + " - " + capitalise(el.title)}
        </div>
        <Button fn={props.remove} button={true} value="Delete" index={index} />
      </div>
    );
  });

  return <div className="image-list margin-bottom">{temp}</div>;
};

export default ItemList;
