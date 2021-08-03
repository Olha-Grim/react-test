import React from "react";
import { render } from "@testing-library/react";
import Image from ".";

describe("Image", () => {

  test("interaction with Image component", () => {
    const { container } = render(
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    );
    const img = container.firstChild;
    expect(img).toBeInTheDocument();
  });
});
