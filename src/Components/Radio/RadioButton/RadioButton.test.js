import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RadioButton from ".";
import RadioGroup from "../RadioGroup";

describe("Radio", () => {
  test("interaction with Radio", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup onChange={onChange} defaultValue="a" optionType="radioGroup">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
      </RadioGroup>
    );
    const one = getByLabelText("Hangzhou");
    const two = getByLabelText("Shanghai");

    fireEvent.click(one, { target: { value: "a" } });
    fireEvent.click(two, { target: { value: "b" } });
  });
});
