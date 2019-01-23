import App from "../components/App";
import React from "react";
import { shallow } from "../enzyme";

describe("App", () => {
  it("renders correctly", () => {
    const nav = shallow(<App />);
    expect(nav).toMatchSnapshot();
  });
  it("should have 3 children", () => {
    const nav = shallow(<App />);
    expect(nav.children()).toHaveLength(3);
  });
});
