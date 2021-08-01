import React from "react";
import { render } from "@testing-library/react";
import Skeleton from ".";

describe("Skeleton", () => {
  test("interaction with Skeleton component", () => {
    const { asFragment } = render(<Skeleton title="Skeleton" />);
    expect(asFragment(<Skeleton />)).toMatchSnapshot();
  });
});
