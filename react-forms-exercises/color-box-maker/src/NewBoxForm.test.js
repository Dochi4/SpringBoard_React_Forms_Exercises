import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import TEST_BOX from "./_testCommon";

it("should render without crashing", function () {
  render(<NewBoxForm addBox={TEST_BOX} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm addBox={TEST_BOX} />);
  expect(asFragment()).toMatchSnapshot();
});

it("should change the width input", function () {
  render(<NewBoxForm addBox={TEST_BOX} />);

  const widthInput = screen.getByLabelText(/width/i);
  fireEvent.change(widthInput, { target: { value: "200" } });
  expect(widthInput.value).toBe("200");
});
it("should change the height input", function () {
  render(<NewBoxForm addBox={TEST_BOX} />);

  const heightInput = screen.getByLabelText(/height/i);
  fireEvent.change(heightInput, { target: { value: "200" } });
  expect(heightInput.value).toBe("200");
});

it("should change the background input", function () {
  render(<NewBoxForm addBox={TEST_BOX} />);

  const backgroundInput = screen.getByLabelText(/background/i);
  fireEvent.change(backgroundInput, { target: { value: "red" } });
  expect(backgroundInput.value).toBe("red");
});
