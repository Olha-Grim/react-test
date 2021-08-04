import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  test("interaction with Pagination component", () => {
    const { asFragment } = render(<Pagination defaultCurrent={1} total={50}/>);
    expect(asFragment(<Pagination />)).toMatchSnapshot();
  });
});
