import React from "react";
import { render } from "@testing-library/react";
import { DatePicker, RangePicker } from ".";
import { Space } from "..";

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
    const onChange = jest.fn();
    const onOk = jest.fn();

    const { container } = render(
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChange} onOk={onOk} />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />
      </Space>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
