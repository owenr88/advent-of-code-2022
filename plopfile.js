// import { NodePlopAPI } from "plop";

module.exports = function (plop) {
  plop.setGenerator("day", {
    description: "new day for advent of code",
    prompts: [
      {
        type: "input",
        name: "day",
        message: "what day are we on?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/day{{day}}/index.ts",
        templateFile: "plop-templates/index.ts",
      },
      {
        type: "add",
        path: "src/day{{day}}/index.test.ts",
        templateFile: "plop-templates/index.test.ts",
      },
      {
        type: "add",
        path: "src/day{{day}}/input.ts",
        templateFile: "plop-templates/input.ts",
      },
    ],
  });
};
