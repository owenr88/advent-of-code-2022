import { intersection, range } from "lodash";

type Data = {
  one: number[];
  two: number[];
  match: number[];
  fullOverlap: boolean;
};

const strToRange = (str: string): number[] => {
  const [start, end] = str.split("-").map(Number);
  return [...range(start, end), end];
};

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): Data[] => {
  return input
    .split(/\n/)
    .filter(Boolean)
    .map((n) => {
      const items = n.split(",");
      const one = strToRange(items[0]);
      const two = strToRange(items[1]);
      const match = intersection(one, two);
      return {
        one,
        two,
        match,
        fullOverlap: one.length === match.length || two.length === match.length,
      };
    });
};

/**
 * @param input String input
 */
export const partOne = (input: string) => {
  const data = prepare(input);
  return data.filter((d) => d.fullOverlap).length;
};

/**
 * @param input String input
 */
export const partTwo = (input: string) => {
  const data = prepare(input);
  return data.filter((d) => d.match.length > 0).length;
};
