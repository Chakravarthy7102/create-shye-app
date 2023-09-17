import ora from "ora";
import { execSync } from "child_process";

type PackageManagers = "npm" | "pnpm" | "bun" |"yarn"

export default function installDependecies(packageManager:PackageManagers) {
  const spinner = ora("Installing dependencies...\n").start();
  try {
      execSync("cd shye && npm install");
      spinner.succeed("Dependies installation finished.")
  } catch (error) {
    spinner.fail(String(error));
    process.exit(0)
  } finally {
    spinner.stop();
  }
}
