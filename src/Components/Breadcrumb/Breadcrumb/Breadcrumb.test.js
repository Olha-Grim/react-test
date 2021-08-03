import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Breadcrumb from ".";
import BreadcrumbItem from "../Item";
import Separator from "../Separator";

describe("Breadcrumb", () => {
  test("interaction with Breadcrumb component", () => {
    // const { getByText } = render(
    //   <Breadcrumb separator="">
    //     <BreadcrumbItem href="">Application Center</BreadcrumbItem>
    //     <Separator />
    //     <BreadcrumbItem href="">Application List</BreadcrumbItem>
    //   </Breadcrumb>
    // );
    // const firstLink = getByText("Application Center");
    // const secondLink = getByText("Application List");
    // userEvent.click(firstLink);
    // expect(firstLink).toHaveFocus();
    // userEvent.click(secondLink);
    // expect(secondLink).toHaveFocus();
  });
});
