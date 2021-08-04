import React from "react";
import { render } from "@testing-library/react";
import InputNumber from ".";

describe("Input Number", () => {
  test("interaction with Input Number component", () => {
    const onChange = jest.fn();
    const { container } = render(
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});
