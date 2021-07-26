import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render", async() => {
    render(<App />);
    screen.debug();
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    expect( await screen.findByText(/Logged in as/i)).toBeInTheDocument();
  
  });
});
