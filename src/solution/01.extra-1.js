import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../exercise/01";

test("counter works with multiple increments and decrements", () => {
  render(<Counter />);

  const increase = screen.getByRole("button", { name: /increase/i });
  const decrease = screen.getByRole("button", { name: /decrease/i });

  userEvent.click(increase);
  userEvent.click(increase);
  userEvent.click(decrease);

  expect(screen.getByText("Current count: 1")).toBeInTheDocument();
});
