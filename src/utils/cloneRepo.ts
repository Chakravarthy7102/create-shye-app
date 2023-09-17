import { execSync } from "child_process";
import ora from "ora";

import logger from "../lib/logger";

function isGitInstalled() {
  try {
    execSync("git --version");
    return true;
  } catch (_e) {
    return false;
  }
}

export function cloneRepo() {

  if (isGitInstalled() === false) {
    logger.error("Git is not installed, please install git and try again.")
  }
  const spinner = ora("Cloning shye repo...\n").start();

  try {
    execSync("git clone git@github.com:Chakravarthy7102/shye.git");
    spinner.succeed("repo cloned")
  } catch (error) {
    spinner.fail(String(error))
    process.exit(0)
  }finally{
    spinner.stop()
  }
}
