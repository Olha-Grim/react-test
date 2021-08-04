import React from "react";
import { render } from "@testing-library/react";
import { Row } from ".";
import Col from "./Col";

describe("Grid", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Grid component", () => {
    const { container } = render(
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div>col-6</div>
        </Col>
      </Row>
    );
    const grid = container.firstChild;
    expect(grid).toBeInTheDocument();
  });
});
