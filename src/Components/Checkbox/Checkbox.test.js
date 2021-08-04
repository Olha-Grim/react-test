import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from ".";

describe("Checkbox", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("renders without crashing", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
