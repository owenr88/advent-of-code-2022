import { partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe("day 3", () => {
  test("challenge 1 sample data", () => {
    expect(partOne(sampleInput)).toBe(157);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(7845);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput)).toBe(70);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(2790);
  });
});
