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

export function convertMonth(s) {
  switch (s) {
    case "jan":
      return "january";
    case "feb":
      return "february";
    case "mar":
      return "march";
    case "apr":
      return "april";
    case "may":
      return "may";
    case "jun":
      return "june";
    case "jul":
      return "july";
    case "sep":
      return "september";
    case "oct":
      return "october";
    case "nov":
      return "november";
    case "dec":
      return "december";
  }
}
