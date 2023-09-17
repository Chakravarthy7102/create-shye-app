import chalk from "chalk";

const logger = {
  warn: (...args: unknown[]) => {
    console.log("⚠️", chalk.yellow(args));
  },
  error: (...args: unknown[]) => {
    console.log("❌", chalk.red(args));
  },
  success: (...args: unknown[]) => {
    console.log("✅", chalk.green(args));
  },
};

export default logger;
