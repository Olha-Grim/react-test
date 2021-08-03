import React from "react";
import { render } from "@testing-library/react";
import Calendar from ".";

describe("Calendar", () => {
  test("interaction with Calendar component", () => {
    const onPanelChange = jest.fn();
    const { container } = render(<Calendar onPanelChange={onPanelChange} />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
