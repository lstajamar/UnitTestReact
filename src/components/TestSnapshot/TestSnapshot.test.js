import React from "react";
import { render } from "@testing-library/react";
import TestSnapshot from "./TestSnapshot";

test("render a snapshot", () => {
  const { baseElement } = render(<TestSnapshot />);
  expect(baseElement).toMatchSnapshot();
});
