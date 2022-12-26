/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): number[] => {
  return input
    .trim()
    .split(/\n\n/)
    .filter(Boolean)
    .map((n) => {
      const values = n.split(/\n/).map((n) => parseInt(n));
      return values.reduce((a, b) => a + b, 0);
    });
};

/**
 * Get the highest value
 * @param input String input
 */
export const getHighestValue = (input: string) => {
  const data = prepare(input);
  return Math.max(...data);
};

/**
 * Get the highest three value
 * @param input String input
 */
export const getHighestThreeValues = (input: string) => {
  const data = prepare(input).sort((a, b) => {
    return b - a;
  });
  const [a, b, c, ...rest] = data;
  return [a, b, c].reduce((a, b) => a + b, 0);
};
