import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// const setup = () => {
//     const { container } = render(<Input />);
//     const input = container.firstChild;
//     return {
//       input,
//       container,
//     }
//   }

describe("Input", () => {
  it("Click input", () => {
    const { container } = render(<Input />);
    const input = container.firstChild;
    expect(input).not.toHaveFocus();
    userEvent.click(input);
    expect(input).toHaveFocus();
  });

  it("using handleChange function", () => {
    const handleChange = jest.fn();
    const { container } = render(<Input type="text" onChange={handleChange} />);
    const text = container.firstChild;
    expect(handleChange).toHaveBeenCalledTimes(0);
    fireEvent.change(text, {
      target: { value: Event },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
