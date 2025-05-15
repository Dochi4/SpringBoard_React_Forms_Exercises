import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TEST_TODO from "./_testCommon";
import TodoList from "./TodoList";

it("should render without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment, container } = render(<TodoList />);
  container.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  container
    .querySelectorAll("[for]")
    .forEach((el) => el.removeAttribute("for"));
  expect(asFragment()).toMatchSnapshot();
});
it("should add new Todo", function () {
  const { getByLabelText, getByText, getAllByText } = render(<TodoList />);

  const initialCount = getAllByText("Remove").length;

  fireEvent.change(getByLabelText("Item"), {
    target: { value: TEST_TODO.item },
  });
  fireEvent.click(getByText("Add Todo"));

  expect(getAllByText("Remove").length).toBe(initialCount + 1);
});

it("should not add Todo", function () {
  const { getByLabelText, getByText, getAllByText } = render(<TodoList />);

  fireEvent.change(getByLabelText("Item"), {
    target: { value: "" },
  });

  fireEvent.click(getByText("Add Todo"));

  expect(getAllByText("Remove").length).toBe(2);
});

it("should edit an existing Todo", function () {
  const { getAllByText, getByDisplayValue, getByText } = render(<TodoList />);

  fireEvent.click(getAllByText("Edit")[0]);

  const itemInput = getByDisplayValue("todo item 1");
  fireEvent.change(itemInput, { target: { value: "Newitem" } });

  fireEvent.click(getByText("Save"));
  expect(getByText("Newitem")).toBeInTheDocument();
});

it("should test Remove", function () {
  const { getAllByText } = render(<TodoList />);

  expect(getAllByText("Remove").length).toBe(2);

  fireEvent.click(getAllByText("Remove")[0]);

  expect(getAllByText("Remove").length).toBe(1);
});
