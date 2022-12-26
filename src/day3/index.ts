import { intersection } from "lodash";

type Data = {
  all: string[];
  one: string[];
  two: string[];
  match: string[];
  priority: number;
  group: number;
};

const alphabetPosition = (text: string): number => {
  var code = text.toUpperCase().charCodeAt(0);
  if (code > 64 && code < 91) return code - 64;
  return 0;
};

const getPriority = (input: string[]): number => {
  return input.reduce((total, letter) => {
    const multiplier = /[a-z]/.test(letter) ? 0 : 26;
    return multiplier + alphabetPosition(letter);
  }, 0);
};

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): Data[] => {
  return input
    .split(/\n/)
    .filter(Boolean)
    .map((n, i) => {
      const all = n.split("");
      const half = Math.ceil(all.length / 2);
      const one = all.slice(0, half);
      const two = all.slice(half);
      const match = intersection(one, two);
      const priority = getPriority(match);
      const group = Math.floor(i / 3) + 1;
      return { all, one, two, match, priority, group };
    });
};

/**
 * @param input String input
 */
export const partOne = (input: string) => {
  const data = prepare(input);
  return data.reduce((total, item) => {
    return total + item.priority;
  }, 0);
};

/**
 * @param input String input
 */
export const partTwo = (input: string) => {
  const data = prepare(input);
  const groupData = new Map<number, number>();
  data.forEach((item) => {
    if (groupData.has(item.group)) return;
    const groups = data.filter((d) => d.group === item.group);
    const match = intersection(...groups.map((g) => g.all));
    groupData.set(item.group, getPriority(match));
  });
  return Array.from(groupData.values()).reduce((a, b) => a + b, 0);
};
