import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import DescriptionsItem from "./DescriptionItem";
import Button from "../Button";
import { Descriptions } from ".";

describe("Descriptions and Descriptions.Item", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with descriptions and descriptions item component", () => {
    const { getByText, getByRole } = render(
      <Descriptions
        bordered
        title="Custom Size"
        size="default"
        extra={<Button type="primary">Edit</Button>}
      >
        <DescriptionsItem label="Product">Cloud Database</DescriptionsItem>
      </Descriptions>
    );
    const button = getByRole("button");
    const item = getByText("Cloud Database");

    userEvent.click(button);
    expect(button).toHaveFocus();
    expect(item).toBeInTheDocument();
  });
});
