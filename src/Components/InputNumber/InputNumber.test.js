import React from "react";
import { render } from "@testing-library/react";
import InputNumber from ".";

describe("Input Number", () => {
  test("interaction with Input Number component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    );
    // const img = getByRole('textbox');
    // expect(img).toBeInTheDocument();
  });
});
