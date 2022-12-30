import { partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe("day 4", () => {
  test("challenge 1 sample data", () => {
    expect(partOne(sampleInput)).toBe(2);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(542);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput)).toBe(4);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(900);
  });
});
