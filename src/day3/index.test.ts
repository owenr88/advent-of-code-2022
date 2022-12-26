import { dayOne, dayTwo } from "./index";
import input from "./input";

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe("day 3", () => {
  test("challenge 1 sample data", () => {
    expect(dayOne(sampleInput)).toBe(157);
  });
  test("challenge 1 real data", () => {
    expect(dayOne(input)).toBe(7845);
  });
  test("challenge 2 sample data", () => {
    expect(dayTwo(sampleInput)).toBe(70);
  });
  test("challenge 2 real data", () => {
    expect(dayTwo(input)).toBe(2790);
  });
});
