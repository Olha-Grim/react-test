import React from "react";
import { render } from "@testing-library/react";
import { Steps, Step } from ".";

describe("Steps", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Steps component", () => {
    const { container } = render(
      <Steps current={1}>
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    );
    const step = container.firstChild;
    expect(step).toBeInTheDocument();
  });
});
