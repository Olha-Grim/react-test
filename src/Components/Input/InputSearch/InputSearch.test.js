import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputSearch from ".";
import userEvent from "@testing-library/user-event";

describe("InputSearch", () => {
  it("interaction with InputSearch", () => {
    const { container } = render(<InputSearch />);
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });

  it("using onSearch function", () => {
    const q = "initial q";
    const onSearch = jest.fn();
    const { getByRole } = render(<InputSearch value={q} onSearch={onSearch} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "hi" } });
    
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
