export function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitaliseString(str) {
  let arr = str.split(" ");
  if (arr.length > 1) {
    let tmp = "";
    for (let s of arr) {
      tmp += capitalise(s) + " ";
    }
    return tmp;
  } else {
    return capitalise(str);
  }
}
