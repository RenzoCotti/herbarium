import Identification from "../components/Identification";
import React from "react";
import { shallow } from "../enzyme";
let mint = require("../../../content")[1];

describe("Identification", () => {
  it("renders correctly", () => {
    const identify = shallow(<Identification plant={mint} />);
    expect(identify).toMatchSnapshot();
  });
  it("should have 3 children", () => {
    const identify = shallow(<Identification plant={mint} />);
    expect(identify.children()).toHaveLength(3);
  });
  it("latin should be equal", () => {
    const identify = shallow(<Identification plant={mint} />);
    expect(identify.find(".latin").text()).toBe(mint.latin);
  });

  it("name should be equal", () => {
    const identify = shallow(<Identification plant={mint} />);
    expect(identify.find(".common").text()).toBe(mint.common);
  });
});
