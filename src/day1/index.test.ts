import { getHighestThreeValues, getHighestValue } from "./index";
import input from "./input";

const sampleInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

describe("day 1", () => {
  test("challenge 1 sample data", () => {
    expect(getHighestValue(sampleInput)).toBe(24000);
  });
  test("challenge 1 real data", () => {
    expect(getHighestValue(input)).toBe(68442);
  });
  test("challenge 2 sample data", () => {
    expect(getHighestThreeValues(sampleInput)).toBe(45000);
  });
  test("challenge 2 real data", () => {
    expect(getHighestThreeValues(input)).toBe(204837);
  });
});
