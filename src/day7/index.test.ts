import { getDirectorySize, partOne, partTwo } from "./index";
import input from "./input";

const sampleInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

describe("day 7", () => {
  test("challenge 1 sample data", () => {
    expect(getDirectorySize(sampleInput, "/a/e")).toBe(584);
  });
  test("challenge 1 sample data", () => {
    expect(getDirectorySize(sampleInput, "/a")).toBe(94853);
  });
  test("challenge 1 sample data", () => {
    expect(getDirectorySize(sampleInput, "/d")).toBe(24933642);
  });
  test("challenge 1 sample data", () => {
    expect(getDirectorySize(sampleInput, "/")).toBe(48381165);
  });
  test("challenge 1 sample data", () => {
    expect(partOne(sampleInput)).toBe(95437);
  });
  test("challenge 1 real data", () => {
    expect(partOne(input)).toBe(1501149);
  });
  test("challenge 2 sample data", () => {
    expect(partTwo(sampleInput)).toBe(24933642);
  });
  test("challenge 2 real data", () => {
    expect(partTwo(input)).toBe(10096985);
  });
});
