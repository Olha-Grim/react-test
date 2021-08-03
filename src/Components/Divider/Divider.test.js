import React from "react";
import { render } from "@testing-library/react";
import Divider from ".";

describe("Divider", () => {
  test("interaction with Divider component", () => {
    const { getByText } = render(
      <Divider orientation="right">Right Text</Divider>
    );
    expect(getByText("Right Text")).toBeInTheDocument();
  });
});
