import React from "react";
import { render } from "@testing-library/react";
import Empty from ".";
import Button from "../Button";
import userEvent from "@testing-library/user-event";

describe("Empty", () => {
  test("interaction with Empty component", () => {
    const { getByRole } = render(
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            Customize <a href="#API">Description</a>
          </span>
        }
      >
        <Button type="primary">Create Now</Button>
      </Empty>
    );
    const button = getByRole("button");
    userEvent.click(button);
    expect(button).toHaveFocus();

    const link = getByRole("link");
    userEvent.click(link);
    expect(link).toHaveFocus();
  });
});
