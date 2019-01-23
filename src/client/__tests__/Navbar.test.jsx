import Navbar from "../components/Navbar";
import React from "react";
import { shallow } from "../enzyme";

describe("Navbar", () => {
  it("renders correctly", () => {
    const nav = shallow(<Navbar />);
    expect(nav).toMatchSnapshot();
  });
  it("should have 6 children", () => {
    const nav = shallow(<Navbar />);
    expect(nav.children()).toHaveLength(6);
  });
  it("should have the correct labels", () => {
    const nav = shallow(<Navbar />);
    let arr = ["Home", "Identify", "Browse", "Random", "Search", "About"];

    nav.children().forEach(function(child, i) {
      expect(child.text()).toBe(arr[i]);
    });
  });
});
