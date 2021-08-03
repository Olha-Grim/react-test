import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Radio, RadioGroup } from "../index";
import Space from "../Space";

describe("Radio", () => {
  test("interaction with Radio component", () => {
    const onChange = jest.fn();
    const value = 1;
    const { getByText } = render(
      <RadioGroup onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
        </Space>
      </RadioGroup>
    );

    const one = getByText("Option A");
    const two = getByText("Option B");

    fireEvent.click(two);
    expect(two).toBeTruthy();
    expect(one).not.toBeChecked();
  });
});
