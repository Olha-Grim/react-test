import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Pagination component", () => {
    const { conatiner } = render(
      <Pagination defaultCurrent={1} total={50} pageSize={30} />
    );
    expect(conatiner).toBe();
  });
});
