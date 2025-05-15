import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TEST_TODO from "./_testCommon";
import NewTodo from "./NewTodo";

it("should render without crashing", function () {
  render(<NewTodo addTodo={TEST_TODO} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodo addTodo={TEST_TODO} />);
  expect(asFragment()).toMatchSnapshot();
});

it("should change the width input", function () {
  render(<NewTodo addTodo={TEST_TODO} />);

  const itemInput = screen.getByLabelText(/item/i);
  fireEvent.change(itemInput, { target: { value: "Newitem" } });
  expect(itemInput.value).toBe("Newitem");
});
