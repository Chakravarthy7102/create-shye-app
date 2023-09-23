import ora from "ora";
import { execSync } from "child_process";
import { cancel, isCancel, select } from "@clack/prompts";
import logger from "../lib/logger";

type PackageManger = "bun" | "npm" | "yarn" | "pnpm";

function getInstallationCommad(pkgManager: PackageManger) {
  switch (pkgManager) {
    case "bun":
      return "bun install";
    case "npm":
      return "npm install";
    case "pnpm":
      return "pnpm add";
    case "yarn":
      return "yarn";
    default:
      return "npm install";
  }
}

export default async function installDependecies() {
  const packageManager = await select({
    message: "Choose a package manager to install shye dependencies.",
    options: [
      {
        label: "bun",
        value: "bun",
      },
      {
        label: "npm",
        value: "npm",
      },
      {
        label: "yarn",
        value: "yarn",
      },
      {
        label: "pnpm",
        value: "pnpm",
      },
    ],
  }) as PackageManger

  if (isCancel(packageManager)) {
    cancel("Operation canceled.");
    return process.exit(0);
  }

  const spinner = ora("Installing dependencies...\n").start();

  try {
    execSync(`cd shye && ${getInstallationCommad(packageManager)}`);
    spinner.succeed("Dependies installation finished.");
  } catch (error) {
    spinner.fail(String(error));
    process.exit(0);
  } finally {
    spinner.stop();
  }

  logger.success("You've successfully installed shye app. \n   Now head over to shye dir and create a production build and start the project \n   your project should available at http://locahost:3000/")

}
