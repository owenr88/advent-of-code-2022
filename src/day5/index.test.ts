import { partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const sampleInputStart = () => [["N", "Z"], ["D", "C", "M"], ["P"]];

const inputStart = () => [
  ["N", "V", "C", "S"],
  ["S", "N", "H", "J", "M", "Z"],
  ["D", "N", "J", "G", "T", "C", "M"],
  ["M", "R", "W", "J", "F", "D", "T"],
  ["H", "F", "P"],
  ["J", "H", "Z", "T", "C"],
  ["Z", "L", "S", "F", "Q", "R", "P", "D"],
  ["W", "P", "F", "D", "H", "L", "S", "C"],
  ["Z", "G", "N", "F", "P", "M", "S", "D"],
];

describe("day 5", () => {
  test("challenge 1 sample data", () => {
    expect(partOne(sampleInput, sampleInputStart())).toBe("CMZ");
  });
  test("challenge 1 real data", () => {
    expect(partOne(input, inputStart())).toBe("CNSZFDVLJ");
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput, sampleInputStart())).toBe("MCD");
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input, inputStart())).toBe("QNDWLMGNS");
  });
});
