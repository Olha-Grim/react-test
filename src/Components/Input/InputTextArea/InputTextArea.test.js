import React from "react";
import {  render, } from "@testing-library/react";
import InputTextArea from ".";


describe("InputTextArea", () => {
  it("interaction with InputTextArea", () => {
    const { container } = render(<InputTextArea />);
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});
