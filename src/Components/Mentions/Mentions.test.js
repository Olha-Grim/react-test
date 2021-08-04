import React from "react";
import { render } from "@testing-library/react";
import { Mentions } from ".";
import MentionsOption from "./MentionsOption";

describe("Mentions", () => {
  test("interaction with Mentions component", () => {
    const onChange = jest.fn();
    const onSelect = jest.fn();
    const { container } = render(
      <Mentions
        style={{ width: "100%" }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
      >
        <MentionsOption value="afc163">afc163</MentionsOption>
        <MentionsOption value="zombieJ">zombieJ</MentionsOption>
        <MentionsOption value="yesmeck">yesmeck</MentionsOption>
      </Mentions>
    );
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});
