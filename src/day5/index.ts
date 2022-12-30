import { head } from "lodash";

type Data = {
  move: number;
  from: number;
  to: number;
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
      return n.match(/move (\d+) from (\d+) to (\d+)/);
    })
    .map((res) => {
      return {
        move: parseInt(res?.[1] ?? "0"),
        from: parseInt(res?.[2] ?? "0") - 1,
        to: parseInt(res?.[3] ?? "0") - 1,
      };
    });
};

/**
 * @param input String input
 */
export const partOne = (input: string, start: string[][]) => {
  const rows = prepare(input);
  const data = rows.reduce((final, row) => {
    const { move, from, to } = row;
    for (let i = 0; i < move; i++) {
      const item = final[from].shift();
      if (item) {
        final[to].unshift(item);
      }
    }
    return final;
  }, start);
  return data.map((r) => head(r)).join("");
};

/**
 * @param input String input
 */
export const partTwo = (input: string, start: string[][]) => {
  const rows = prepare(input);
  console.log("start", start);
  const data = rows.reduce((final, row) => {
    const { move, from, to } = row;
    const items = final[from].splice(0, move);
    if (items.length) {
      final[to].unshift(...items);
    }
    console.log(final);
    return final;
  }, start);
  return data.map((r) => head(r)).join("");
};
