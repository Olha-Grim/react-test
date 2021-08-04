import React from "react";
import { render } from "@testing-library/react";
import Upload from ".";
import Button from "../Button";

describe("Upload", () => {
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
      <Upload>
        <Button>Click to Upload</Button>
      </Upload>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
