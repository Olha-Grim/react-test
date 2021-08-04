import React from "react";
import { render } from "@testing-library/react";
import { Tree } from ".";

describe("Tree", () => {
  test("interaction with Tree component", () => {
    const { asFragment } = render(
      <Tree className="draggable-tree" draggable blockNode />
    );
    expect(asFragment(<Tree className="draggable-tree"/>)).toMatchSnapshot();
  });
});
