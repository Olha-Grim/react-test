import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Affix from ".";
import Button from "../Button";

describe("Affix", () => {
  test("interaction with affix component", () => {
   
    const { getByText, getByTestId } = render(
      <Affix type="affix">
        <div>
          <Button type="primary">Affix top</Button>
        </div>
      </Affix>
    );
    const affixButton = getByText(/Affix/i);

    expect(affixButton).not.toHaveFocus();
    userEvent.click(affixButton);
 
  });
});
