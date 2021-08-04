import React from "react";
import { render } from "@testing-library/react";
import { Layout, Content, Footer, Header } from ".";

describe("Layout", () => {
  test("interaction with Layout component", () => {
    const { container } = render(
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});
