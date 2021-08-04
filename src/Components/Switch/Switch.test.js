import React from "react";
import { render } from "@testing-library/react";
import Switch from ".";

describe("Switch", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Switch component", () => {
    const onChange = jest.fn();
    const { container } = render(<Switch defaultChecked onChange={onChange} />);
    const component = container.firstChild;
    expect(component).toBeInTheDocument();
  });
});
