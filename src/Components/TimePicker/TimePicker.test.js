import React from "react";
import { render } from "@testing-library/react";
import { TimePicker } from "..";
import moment from "moment";

describe("TimePicker", () => {
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
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
