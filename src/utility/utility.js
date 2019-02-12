import React from "react";

export function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitaliseString(str) {
  let arr = str.split(" ");
  if (arr.length > 1) {
    let tmp = "";
    let last = arr[arr.length - 1];
    for (let s of arr) {
      if (s === last) {
        tmp += capitalise(s);
      } else {
        tmp += capitalise(s) + " ";
      }
    }
    return tmp;
  } else {
    return capitalise(str);
  }
}

//if obj isnt null, render opt if is not null, otherwise render obj
export function renderOptional(obj, str, opt) {
  if (obj !== undefined) {
    return (
      <div className="row-table" key={obj}>
        <div className="label-table sub-title">{str}:</div>
        <div className="content-table">
          {opt ? capitalise(opt) : capitalise(obj)}
        </div>
      </div>
    );
  }
  return;
}

export function renderSection(title, arr) {
  return (
    <React.Fragment>
      <div className="title padded-top">{title}</div>
      {arr.map(obj => renderOptional(obj.property, obj.label, obj.alt))}
    </React.Fragment>
  );
}

export function convertToColour(colour) {
  switch (colour) {
    case "light blue":
      return "#add8e6";
    case "blue":
      return "#4169e1";
    case "dark blue":
      return "#00008b";
    case "light green":
      return "#90ee90";
    case "green":
      return "#228b22";
    case "dark green":
      return "#008000";
    case "light yellow":
      return "khaki";
    case "yellow":
      return "gold";
    case "dark yellow":
      return "goldenrod";
    case "light orange":
      return "tomato";
    case "orange":
      return "orange";
    case "dark orange":
      return "orangered";
    case "light red":
      return "darksalmon";
    case "red":
      return "crimson";
    case "dark red":
      return "darkred";
    case "light brown":
      return "peru";
    case "brown":
      return "chocolate";
    case "dark brown":
      return "maroon";
    case "light violet":
      return "plum";
    case "violet":
      return "darkorchid";
    case "dark violet":
      return "rebeccapurple";
    case "white":
      return "white";
    case "gray":
      return "gray";
    case "black":
      return "black";
  }
}
