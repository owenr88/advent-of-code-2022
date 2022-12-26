type Inputs = "A" | "B" | "C" | "X" | "Y" | "Z";
type Options = "Rock" | "Paper" | "Scissors";

const convert = (input: Inputs): Options => {
  if (input === "A" || input === "X") {
    return "Rock";
  }
  if (input === "B" || input === "Y") {
    return "Paper";
  }
  return "Scissors";
};

const optionScores: Record<Options, number> = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const result = (me: Inputs, opponent: Inputs): number => {
  const meOption = convert(me);
  const opponentOption = convert(opponent);
  const score = optionScores[meOption];
  if (meOption === opponentOption) {
    return 3 + score;
  }
  if (meOption === "Rock" && opponentOption === "Scissors") {
    return 6 + score;
  }
  if (meOption === "Paper" && opponentOption === "Rock") {
    return 6 + score;
  }
  if (meOption === "Scissors" && opponentOption === "Paper") {
    return 6 + score;
  }
  return score;
};

const reverseResult = (opponent: Inputs, result: Inputs): number => {
  const opponentOption = convert(opponent);
  if (result === "Z") {
    // Win
    let meOption: Options = "Rock";
    if (opponentOption === "Paper") meOption = "Scissors";
    if (opponentOption === "Rock") meOption = "Paper";
    const score = optionScores[meOption];
    return 6 + score;
  }
  if (result === "Y") {
    // Draw
    const score = optionScores[opponentOption];
    return 3 + score;
  }
  if (result === "X") {
    // Lose
    let meOption: Options = "Rock";
    if (opponentOption === "Scissors") meOption = "Paper";
    if (opponentOption === "Rock") meOption = "Scissors";
    const score = optionScores[meOption];
    return 0 + score;
  }
  return 0;
};

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): string[] => {
  return input.split(/\n/).filter(Boolean);
};

/**
 * @param input String input
 */
export const dayOne = (input: string) => {
  const data = prepare(input);
  console.log(data);
  return data
    .map((n) => {
      const [opponent, me] = n.split(" ");
      return result(me as Inputs, opponent as Inputs);
    })
    .reduce((a, b) => a + b, 0);
};

/**
 * @param input String input
 */
export const dayTwo = (input: string) => {
  const data = prepare(input);
  console.log(data);
  return data
    .map((n) => {
      const [opponent, result] = n.split(" ");
      return reverseResult(opponent as Inputs, result as Inputs);
    })
    .reduce((a, b) => a + b, 0);
};
