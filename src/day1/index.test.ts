import { partOne, partTwo } from "./index";
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
    expect(partOne(sampleInput)).toBe(24000);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(68442);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput)).toBe(45000);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(204837);
  });
});
