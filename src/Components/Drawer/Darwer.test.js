import React from "react";
import { render } from "@testing-library/react";
import Drawer from ".";
import Button from "../Button";

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
    const showDrawer = jest.fn();
    const onClose = jest.fn();
    const visible = true;

    const { container } = render(
      <>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
