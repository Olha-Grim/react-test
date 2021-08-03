import React from "react";
import { render } from "@testing-library/react";
import Comment from ".";

describe("Comment", () => {
  test("Comment", () => {
    const { container, getByRole } = render(
      <Comment
        author="Han Solo"
        avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
      />
    );

    const comment = container.firstChild;
    expect(comment).toBeInTheDocument();
  });
});
