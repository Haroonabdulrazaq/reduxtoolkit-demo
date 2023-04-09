import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet Component Test", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders with a name", () => {
    render(<Greet name="Vishwas" />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
