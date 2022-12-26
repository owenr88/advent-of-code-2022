import { partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = `A Y
B X
C Z`;

describe("day 2", () => {
  test("challenge 1 sample data", () => {
    expect(partOne(sampleInput)).toBe(15);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(10310);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput)).toBe(12);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(14859);
  });
});
