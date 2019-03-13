import React from "react";
import definitions from "./definitions";

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

export function toColour(c) {
  switch (c) {
    case "cyan":
      return "Light Blue";
    case "saddlebrown":
      return "Brown";
    case "greenyellow":
      return "Light Green";
  }
  return c.charAt(0).toUpperCase() + c.slice(1);
}

export function createOptions(label, name, fn, arr, multiple) {
  let content = arr.map(o => (
    <option value={o} key={o}>
      {capitalise(o)}
    </option>
  ));

  let select = multiple ? (
    <select
      // value={this.state[label]}
      onChange={val => fn(val, name, multiple)}
      multiple
    >
      {content}
    </select>
  ) : (
    <select
      // value={this.state[label]}
      onChange={val => fn(val, name)}
      defaultValue="select an option"
    >
      <option disabled value="select an option">
        select an option
      </option>
      {content}
    </select>
  );

  return (
    <div className="row-table">
      <div className="label-table sub-title">{label}</div>
      <div className="content-table">{select}</div>
    </div>
  );
}

export function stringOrEmpty(obj, prop) {
  return obj ? obj[prop] : "";
}

export function arrOrEmpty(obj, prop) {
  return obj ? obj[prop] : [];
}
