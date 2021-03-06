import React from "react";
import { render } from "@testing-library/react";
import { DatePicker, RangePicker } from ".";
import { Space } from "..";

describe("DatePicker", () => {
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
    const onOk = jest.fn();

    const { container } = render(
      <DatePicker showTime onChange={onChange} onOk={onOk} />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
