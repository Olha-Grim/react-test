import React from "react";
import { render } from "@testing-library/react";
import PageHeader from ".";

describe("PageHeader", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("renders without crashing", () => {
    const { container } = render(
      <>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        />
      </>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
