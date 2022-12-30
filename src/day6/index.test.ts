import { partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = ``;

describe("day 6", () => {
  test("challenge 1 sample data", () => {
    expect(partOne("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(7);
  });
  test("challenge 1 sample data", () => {
    expect(partOne("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
  });
  test("challenge 1 sample data", () => {
    expect(partOne("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
  });
  test("challenge 1 sample data", () => {
    expect(partOne("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
  });
  test("challenge 1 sample data", () => {
    expect(partOne("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(1876);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(19);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(23);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo("nppdvjthqldpwncqszvftbrmjlhg")).toBe(23);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(29);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(26);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(2202);
  });
});
