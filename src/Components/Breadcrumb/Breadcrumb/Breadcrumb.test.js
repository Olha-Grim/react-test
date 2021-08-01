import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Breadcrumb from ".";
import BreadcrumbItem from "../Item";
import Separator from "../Separator";

describe("Breadcrumb", () => {
  test("interaction with Breadcrumb component", () => {
    const { getByText, getByRole, container } = render(
      <Breadcrumb separator="">
        <BreadcrumbItem>Location</BreadcrumbItem>
        <Separator>:</Separator>
        <BreadcrumbItem href="">Application Center</BreadcrumbItem>
        <Separator />
        <BreadcrumbItem href="">Application List</BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>An Application</BreadcrumbItem>
      </Breadcrumb>
    );

    // const breadcrumb = container.firstChild();
    // console.log(breadcrumb, "breadcrumb");
    // img.setAttribute("data-src", img200);
    // expect(img).toHaveAttributeValue("src", img200);
    // const separator;
    // const separator;

    // screen.debug();
  });
});
