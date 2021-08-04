import React from "react";
import { render } from "@testing-library/react";
import { Dropdown } from ".";

describe("Callapse", () => {
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
    const preventDefault = jest.fn();

    const { container } = render(
      <>
        <Dropdown overlay={<p>Hi</p>}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me
          </a>
        </Dropdown>
      </>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
