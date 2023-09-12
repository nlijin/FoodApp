import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for contact page", () => {
  test("should render heading component in the document", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should render button component in the document", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should render 3 input elements in the document", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(2);
  });
});
