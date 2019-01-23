import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

//mocks react-dom with a dummy object containing render
jest.mock("react-dom", () => ({ render: jest.fn() }));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  //if id is equal to root, returns div, else return false
  global.document.getElementById = id => id === "root" && div;
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
});
