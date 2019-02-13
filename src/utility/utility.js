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
    case "light red":
      return "#8177FE";
    case "red":
      return "#0E05FE";
    case "dark red":
      return "#000186";

    case "light orange":
      return "#7EBBFE";
    case "orange":
      return "#117FFD";
    case "dark orange":
      return "#063E80";

    case "light yellow":
      return "#84FDFD";
    case "yellow":
      return "#23FDFD";
    case "dark yellow":
      return "#137D80";

    case "light green":
      return "#19DA00";
    case "green":
      return "#0B8000";
    case "dark green":
      return "#023D00";

    case "light blue":
      return "#FDAA4D";
    case "blue":
      return "#E26D0D";
    case "dark blue":
      return "#840506";

    case "light purple":
      return "#FD7CBB";
    case "purple":
      return "#F9127F";
    case "dark purple":
      return "#830544";

    case "light pink":
      return "#FC7CFF";
    case "pink":
      return "#FD15FC";
    case "dark pink":
      return "#830583";

    case "light gray":
      return "#C7C7C7";
    case "gray":
      return "#787878";
    case "dark gray":
      return "#3F3E42";

    case "light brown":
      return "#547196";
    case "brown":
      return "#103D66";
    case "dark brown":
      return "#0B1C3E";

    case "white":
      return "#FFFFFF";
    case "black":
      return "#000000";
  }
}
