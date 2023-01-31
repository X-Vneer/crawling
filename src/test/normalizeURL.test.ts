import nomalizeURL from "../nomalizeURL.js";

import { describe, expect, it } from "vitest";

describe("initial test", () => {
  it("should pass this test", () => {
    const input = "https://something.som.com/path";
    const output = "something.som.com/path";
    expect(nomalizeURL(input)).toBe(output);
  });
});
describe("when url end with a /", () => {
  it("should pass this test", () => {
    const input = "https://something.som.com/path/";
    const output = "something.som.com/path";
    expect(nomalizeURL(input)).toBe(output);
  });
});
describe("when url has a capital letter", () => {
  it("should pass this test", () => {
    const input = "https://soMetHing.som.com/path/";
    const output = "something.som.com/path";
    expect(nomalizeURL(input)).toBe(output);
  });
});
