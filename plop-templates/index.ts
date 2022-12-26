
/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): string[][] => {
  return input
    .split(/\n\n/)
	.filter(Boolean)
	  .map((n) => (
		  n
			.replace(/\s+/g, '')
			.split('')
		  	.filter(Boolean)
	));
}

/**
 * DESCRIPTION HERE
 * @param input String input
 */
export const doSomething = (input: string) => {
	const data = prepare(input);
	return 0;
}