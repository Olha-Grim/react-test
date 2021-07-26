import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);
    await screen.findByText(/Logged in as/i);
    expect(screen.queryByText(/Searches for React/i)).toBeNull();
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "React" },
    // });
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument();
  });
});

describe("event", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <input type="checkbox" onChange={handleChange} />
    );
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    // userEvent.click(checkbox, {ctrlKey: true, shiftKey: true});
    // expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("double click", () => {
    const onChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={onChange} />);
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("tab = focus", () => {
    const { getAllByTestId } = render(
      <div>
        <input type="checkbox" data-testid="element" />
        <input type="radio" data-testid="element" />
        <input type="number" data-testid="element" />
      </div>
    );
    const [checkbox, radio, number] = getAllByTestId("element");
    userEvent.tab(checkbox);
    expect(checkbox).toHaveFocus();
    userEvent.tab(radio);
    expect(radio).toHaveFocus();
    userEvent.tab(number);
    expect(number).toHaveFocus();
  });

  it("select option", () => {
    const { selectOptions, getByRole, getByText } = render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    userEvent.selectOptions(getByRole('combobox'), "1");
    expect(getByText("A").selected).toBeTruthy();

    userEvent.selectOptions(getByRole('combobox'), "2");
    expect(getByText("B").selected).toBeTruthy();
    expect(getByText("A").selected).toBeFalsy();
  });

  // it("input focus"),
  //   () => {
  //     const { getByTestId } = render(
  //       <input type="text" data-testid="simple-input" />
  //     );
  //     const input = getByTestId("simple-input");
  //     expect(input).not.toHaveFocus;
  //     input.focus();
  //     expect(input).toHaveFocus;
  //   };
});
