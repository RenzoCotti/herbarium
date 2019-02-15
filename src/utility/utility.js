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
      return "light blue";
    case "saddlebrown":
      return "brown";
    case "greenyellow":
      return "light green";
  }
  return c;
}

export function createInput(label, name, fn, area, size) {
  return (
    <div className="row-table">
      <div className="label-table sub-title">{label}</div>
      <div className="content-table">
        {area ? (
          <textarea
            className="forms"
            type="text"
            name={name}
            onChange={fn}
            autoComplete="off"
          />
        ) : (
          <input
            className={size ? "forms shortForm" : "forms"}
            type="text"
            name={name}
            onChange={fn}
            autoComplete="off"
          />
        )}
        {size ? size : ""}
      </div>
    </div>
  );
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

export function createColours(label, name, fn) {
  return (
    <div className="row-table">
      <div className="label-table sub-title">{label}</div>
      <div className="content-table">
        <select
          // value={this.state[label]}
          onChange={val => fn(val, name)}
          className="colourSelect"
          defaultValue="select an option"
        >
          <option disabled value="select an option">
            select an option
          </option>
          {definitions.colours.map(c => (
            <option
              key={c}
              style={{
                backgroundColor: c,
                color: "transparent"
              }}
              value={c}
            >
              {toColour(c)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
