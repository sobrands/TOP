import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import CustomButton from "./CustomButton";

describe("App component", () => {
  it("renders our first test", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders our second test after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me!" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(
      /our second test now/i,
    );
  });
});

describe("Custom Button", () => {
  it("should render a button with the text 'Click me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click Me!" });

    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click Me!" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
