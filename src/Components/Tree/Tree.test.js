import React from "react";
import { render } from "@testing-library/react";
import Tree from ".";

describe("Tree", () => {
  test("interaction with Tree component", () => {
    const { container } = render(
      <Tree className="draggable-tree" draggable blockNode />
    );
    const tree = container.firstChild;
    expect(tree).toBeInTheDocument();
  });
});
