import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Anchor from ".";
import AnchorLink from "antd/lib/anchor/AnchorLink";

describe("Anchor", () => {
  test("interaction with anchor component", () => {
    const { getByText } = render(
      <Anchor affix={false}>
        <AnchorLink href="#Anchor-Props" title="Anchor Props" />
      </Anchor>
    );
    userEvent.click(getByText("Anchor Props"));
    expect(getByText("Anchor Props")).toHaveFocus();
  });
});
