import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { Select, SelectOptGroup, SelectOption } from "../index";

describe("Select", () => {
  test("interaction with Select component", () => {
    const handleChange = jest.fn();

    // const { selectOptions, getByRole, getByText } = render(
      // <Select
      //   defaultValue="lucy"
      //   style={{ width: 200 }}
      //   onChange={handleChange}
      // >
      //   {/* <SelectOptGroup label="Manager"> */}
      //     {/* <SelectOption value="A">A</SelectOption>
      //     <SelectOption value="B">B</SelectOption> */}
      //   {/* </SelectOptGroup> */}
      // // </Select>
    // );

    // userEvent.selectOptions(getByRole('combobox'), "A");
    // expect(getByText("A").selected).toBeTruthy();
    // userEvent.selectOptions(getByRole('combobox'), "B");
    // expect(getByText("B").selected).toBeTruthy();
    // expect(getByText("A").selected).toBeFalsy()
  });
});
