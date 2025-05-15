import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditTodo from "./EditTodo";

it("renders without crashing", function () {
  render(<EditTodo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<EditTodo />);
  expect(asFragment()).toMatchSnapshot();
});
