import Footbar from "../components/Footbar";
import React from "react";
import { shallow } from "../enzyme";

describe("Footbar", () => {
  it("renders correctly", () => {
    const foot = shallow(<Footbar />);
    expect(foot).toMatchSnapshot();
  });
  it("should have the correct content", () => {
    const foot = shallow(<Footbar />);
    let date = new Date().getFullYear();
    let str = `© ${date} Renzo Cotti`;
    expect(foot.text()).toBe(str);
  });
});
