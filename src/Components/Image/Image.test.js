import React from "react";
import { render } from "@testing-library/react";
import Image from ".";
import userEvent from "@testing-library/user-event";

describe("Image", () => {
  //   window.matchMedia =
  //     window.matchMedia ||
  //     function () {
  //       return {
  //         matches: false,
  //         addListener: function () {},
  //         removeListener: function () {},
  //       };
  //     };
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
