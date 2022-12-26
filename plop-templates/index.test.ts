import { doSomething } from "./index";
import input from "./input";

const sampleInput = ``;

describe("day {{day}}", () => {
  test("challenge 1 sample data", () => {
    expect(doSomething(sampleInput)).toBe(0);
  });
  test("challenge 1 real data", () => {
    expect(doSomething(input)).toBe(0);
  });
  test("challenge 2 sample data", () => {
    expect(doSomething(sampleInput)).toBe(0);
  });
  test("challenge 2 real data", () => {
    expect(doSomething(input)).toBe(0);
  });
});
