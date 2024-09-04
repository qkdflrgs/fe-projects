import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, beforeEach, vi } from "vitest";
import { server } from "./src/shared/mocks/server";
import {
  resetIntersectionMocking,
  setupIntersectionMocking,
} from "react-intersection-observer/test-utils";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  cleanup();
  resetIntersectionMocking();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
