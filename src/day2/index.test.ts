import { dayOne, dayTwo } from "./index";
import input from "./input";

const sampleInput = `A Y
B X
C Z`;

describe("day 2", () => {
  test("challenge 1 sample data", () => {
    expect(dayOne(sampleInput)).toBe(15);
  });
  test("challenge 1 real data", () => {
    expect(dayOne(input)).toBe(10310);
  });
  test("challenge 2 sample data", () => {
    expect(dayTwo(sampleInput)).toBe(12);
  });
  test("challenge 2 real data", () => {
    expect(dayTwo(input)).toBe(14859);
  });
});
