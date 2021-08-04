import React from "react";
import { render } from "@testing-library/react";
import { List, ListItem } from ".";

describe("Layout", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Layout component", () => {
    const { container } = render(
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={"Los Angeles battles huge wildfires."}
        renderItem={(item) => <ListItem>{item}</ListItem>}
      />
    );
    const component = container.firstChild;
    expect(component).toBeInTheDocument();
  });
});
