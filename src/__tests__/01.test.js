import { render, screen } from "@testing-library/react";
import Home from "../exercise/Home";

test("renders Home page heading", () => {
  render(<Home />);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test("renders Home page paragraph", () => {
  render(<Home />);
  expect(
    screen.getByText(/to see the title change in the browser tab/i)
  ).toBeInTheDocument();
});
