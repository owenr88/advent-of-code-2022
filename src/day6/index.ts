import { uniq } from "lodash";

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): string[] => {
  return input.split("");
};

/**
 * @param input String input
 */
export const partOne = (input: string) => {
  let count = 0;
  let found = false;
  const matches = 4;
  const data = prepare(input);
  data.forEach((char, i, arr) => {
    if (found) return;
    count = i + matches;
    const items = arr.slice(i, count);
    if (uniq(items).length === matches) {
      found = true;
      return;
    }
  });
  return count;
};

/**
 * @param input String input
 */
export const partTwo = (input: string) => {
  let count = 0;
  let found = false;
  const matches = 14;
  const data = prepare(input);
  data.forEach((char, i, arr) => {
    if (found) return;
    count = i + matches;
    const items = arr.slice(i, count);
    if (uniq(items).length === matches) {
      found = true;
      return;
    }
  });
  return count;
};
