import React from "react";
import { fireEvent, render,  } from "@testing-library/react";
import RadioGroup from ".";

describe("Radio and RadioGroup", () => {
  test("radio", () => {
    const onChange = jest.fn();
    const plainOptions = [
      {
        label: "Apple",
        value: "Apple",
        "data-testid": "element",
    
      },
      {
        label: "Pear",
        value: "Pear",
        "data-testid": "element",

      },
    ];

    const {  getByLabelText } = render(
      <RadioGroup options={plainOptions} onChange={onChange} />
    );

    const one = getByLabelText("Apple");
    const two = getByLabelText("Pear");
 
    fireEvent.change(one, { target: { value: "Apple" } });
    fireEvent.change(two, { target: { value: "Pear" } });
  });
});
