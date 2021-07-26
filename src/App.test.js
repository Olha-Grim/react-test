import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByAltText(/search image/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search text/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    
  });
});
