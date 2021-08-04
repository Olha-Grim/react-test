import React from "react";
import { render } from "@testing-library/react";
import Carousel from ".";

describe("Carousel", () => {
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
    const { container } = render(
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Carousel>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
