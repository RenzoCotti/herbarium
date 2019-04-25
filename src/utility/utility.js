export function capitalise(string) {
  try {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  catch (e) {
    return string
  }
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
  return capitalise(c);
}

export function stringOrEmpty(obj, prop) {
  return obj ? obj[prop] : "";
}

export function arrOrEmpty(obj, prop) {
  return obj ? obj[prop] : [];
}
