import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Select, SelectOptGroup, SelectOption} from "../index";

describe("Select", () => {
  test("interaction with Select component", () => {
    const handleChange = jest.jn();
    // const { selectOptions, getByRole, getByText } = render(
    //   <Select
    //     defaultValue="lucy"
    //     style={{ width: 200 }}
    //     onChange={handleChange}
    //   >
    //     <SelectOptGroup label="Manager">
    //       <SelectOption value="jack">Jack</SelectOption>
    //       <SelectOption value="lucy">Lucy</SelectOption>
    //     </SelectOptGroup>
    //   </Select>
    // );

    // // const defaultValue = getByText(/lucy/i);

    // userEvent.selectOptions(getByRole('combobox'), "Jack");
    // expect(getByText("A").selected).toBeTruthy();
    // userEvent.selectOptions(getByRole('combobox'), "Lucy");
    // expect(getByText("B").selected).toBeTruthy();
    // expect(getByText("A").selected).toBeFalsy()
  });
});
