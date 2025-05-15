import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import TEST_BOX from "./_testCommon";

it("should render without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should change the width input", function () {
  const { getByLabelText, getByText, getAllByText } = render(<BoxList />);

  fireEvent.change(getByLabelText("Width (px)"), {
    target: { value: parseInt(TEST_BOX.width) },
  });
  fireEvent.change(getByLabelText("Height (px)"), {
    target: { value: parseInt(TEST_BOX.height) },
  });
  fireEvent.change(getByLabelText("Background Color"), {
    target: { value: TEST_BOX.background },
  });

  fireEvent.click(getByText("Add Box"));

  expect(getAllByText("Remove").length).toBe(3);
});

it("should test Remove", function () {
  const { getAllByText } = render(<BoxList />);

  expect(getAllByText("Remove").length).toBe(2);

  fireEvent.click(getAllByText("Remove")[0]);

  expect(getAllByText("Remove").length).toBe(1);
});
