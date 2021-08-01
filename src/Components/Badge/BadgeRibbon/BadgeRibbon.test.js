import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BadgeRibbon from ".";
import { Card } from "../../Card";

describe("BadgeRibbon", () => {
  test("interaction with BadgeRibbon component", () => {
    const { getByText } = render(
      <BadgeRibbon text="Hippies">
        <Card title="Pushes open the window" size="small">
          and raises the spyglass.
        </Card>
      </BadgeRibbon>
    );

    expect(getByText(/and raises the spyglass/i)).toBeInTheDocument();
  });
});
