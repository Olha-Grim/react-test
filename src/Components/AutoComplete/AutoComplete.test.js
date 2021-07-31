import React, { Fragment } from "react";
// import { render, unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import AutoComplete from ".";

describe("AutoComplete", () => {
  test("that autocomplete works", async () => {
    // const { getByTestId, getByRole, queryByRole } = render(<AutoComplete />, {});


    // const autoCompleteSearch = getByTestId("ant-select-auto-complete");

    // console.log(AutoCompleteSearch, "AutoCompleteSearch")
    // screen.debug()
    // const Input = globalGetByRole(AutoCompleteSearch, "textbox");

    // expect(queryByRole("listbox")).toBeNull();

    // fireEvent.mouseDown(Input);
    // const ListBox = getByRole("listbox");
    // expect(ListBox).toBeDefined();
    // const menuItem1 = globalGetByText(ListBox, top100Films[0].title);
    // fireEvent.click(menuItem1);
    // expect(queryByRole("listbox")).toBeNull();

    // fireEvent.mouseDown(Input);
    // const ListBoxAfter = getByRole("listbox");
    // expect(ListBoxAfter).toBeDefined();
    // const menuItem2 = globalGetByText(ListBoxAfter, top100Films[1].title);
    // fireEvent.click(menuItem2);
    // expect(queryByRole("listbox")).toBeNull();
  });
});
