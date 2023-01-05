type Command = {
  op: "cd" | "ls";
  context: string;
};

type Dir = {
  op: "dir";
  directory: string;
};

type File = {
  op: "file";
  name: string;
  size: number;
};

type Line = Command | Dir | File;

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): Line[] => {
  return input
    .split(/\n/)
    .filter(Boolean)
    .map((n) => {
      if (n.charAt(0) === "$") {
        const match = n.match(/\$ (cd|ls)\s?(.*)/i);
        // console.log("match", match);
        const [all, op, context = ""] = match as [any, Command["op"], string];
        return { op: op ?? "cd", context: context ?? "" };
      }
      if (n.slice(0, 3) === "dir") {
        const match = n.split(" ").filter(Boolean);
        const [op, directory = ""] = match as [Dir["op"], string];
        return { op, directory };
      }
      const [size, name] = n.split(" ").filter(Boolean);
      return {
        op: "file",
        name,
        size: parseInt(size),
      };
    });
};

/**
 * Class for the filesystem
 */
class Filesystem {
  private currentDir: string;
  public files: Record<string, number>;
  public directories: Record<string, string[]>;

  constructor() {
    this.currentDir = "/";
    this.files = {};
    this.directories = { "/": [] };
  }

  public cd(dir: string) {
    if (dir === "..") {
      this.currentDir = this.currentDir.split("/").slice(0, -1).join("/");
    } else if (dir === "/") {
      this.currentDir = "/";
    } else if (dir.startsWith("/")) {
      this.currentDir = dir;
    } else if (this.currentDir === "/") {
      this.currentDir = `/${dir}`;
    } else {
      this.currentDir = `${this.currentDir}/${dir}`;
    }
  }

  public ls() {
    return this.directories[this.currentDir] ?? [];
  }

  public mkdir(dir: string) {
    if (!this.directories[this.currentDir])
      this.directories[this.currentDir] = [];
    this.directories[this.currentDir].push(dir);
  }

  public touch(file: string, size: number) {
    this.files[
      `${this.currentDir === "/" ? "/" : this.currentDir + "/"}${file}`
    ] = size;
  }

  public getDirectorySize = (dir: string): number => {
    const files = Object.keys(this.files).filter((f) => f.startsWith(dir));
    return files.reduce((a, f) => a + this.files[f], 0);
  };

  public getAllDirectorySizes = (): Record<string, number> => {
    return Object.keys(this.directories).reduce(
      (dirs, dir) => {
        const subDirs = this.directories[dir] ?? [];
        console.log("subDirs", dir, subDirs);
        const subDirValues = subDirs.reduce((t, d) => {
          const newDir = (dir === "/" ? dir : `${dir}/`) + d;
          return {
            ...t,
            [newDir]: this.getDirectorySize(newDir),
          };
        }, {});
        return {
          ...dirs,
          ...subDirValues,
        };
      },
      {
        "/": this.getDirectorySize("/"),
      }
    );
  };
}

/**
 * @param input String input
 */
const execute = (input: string) => {
  const data = prepare(input);
  console.log(data);
  const fs = new Filesystem();
  data.forEach((d) => {
    if (d.op === "cd") {
      fs.cd(d.context);
    }
    if (d.op === "ls") {
      console.log(fs.ls());
    }
    if (d.op === "dir") {
      fs.mkdir(d.directory);
    }
    if (d.op === "file") {
      fs.touch(d.name, d.size);
    }
  });
  return fs;
};

/**
 * @param input String input
 */
export const getDirectorySize = (input: string, dir: string) => {
  const fs = execute(input);
  return fs.getDirectorySize(dir);
};

/**
 * @param input String input
 */
export const partOne = (input: string) => {
  const fs = execute(input);
  const values = fs.getAllDirectorySizes();
  const validValues = Object.values(values).filter((total) => {
    return total < 100000;
  });
  return validValues.reduce((t, d) => t + d, 0);
};

/**
 * @param input String input
 */
export const partTwo = (input: string): number => {
  const fs = execute(input);
  const values = fs.getAllDirectorySizes();
  const totalSpace = 70000000;
  const totalUsed = values["/"];
  const spaceRequired = 30000000;
  const sortedValues = Object.entries(values).sort((a, b) => {
    return a[1] - b[1];
  });
  const validValue = sortedValues.find((e) => {
    const [dir, size] = e;
    const freeSpace = totalSpace - totalUsed + size;
    return freeSpace > spaceRequired;
  });

  return validValue?.[1] ?? 0;
};
