import React from "react";
import { render } from "@testing-library/react";
import { TreeSelect } from "..";
import { TreeNode } from "../Tree";

describe("TreeSelect", () => {
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
    const value = true;
    const onChange = jest.fn();
    const { container } = render(
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
      >
        
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="leaf1" />
            <TreeNode value="leaf2" title="leaf2" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
