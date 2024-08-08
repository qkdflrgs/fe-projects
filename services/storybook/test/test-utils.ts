import React from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import * as globalStorybookConfig from "../.storybook/preview";
import { setProjectAnnotations } from "@storybook/react";
import "@testing-library/jest-dom";

setProjectAnnotations(globalStorybookConfig);

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
