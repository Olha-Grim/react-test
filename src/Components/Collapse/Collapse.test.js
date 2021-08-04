import React from "react";
import { render } from "@testing-library/react";
import { Collapse, CollapsePanel } from ".";

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
    const onChange = jest.fn();

    const { container } = render(
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <CollapsePanel header="This is panel header 1" key="1">
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </CollapsePanel>
      </Collapse>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
