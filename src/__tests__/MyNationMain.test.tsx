import React from "react";
import { shallow } from "enzyme";
import { MyNationMain } from "../components/MyNationMain";
import { findByTestAttr } from "../functions/findByTestAttr";
import { Navigation } from "../components/Navigation/Navigation";

describe("<MyNationMain/>", () => {
  const component = shallow(<MyNationMain />);

  it("renders without error", () => {
    const main = findByTestAttr(component, "main");
    expect(main.length).toBe(1);
  });

  it("renders child without error", () => {
    expect(component.containsMatchingElement(<Navigation />)).toBe(true);
  });
});
