#!/usr/bin/env node

import { cloneRepo } from "./utils/cloneRepo";
import { renderTitle } from "./utils/getTitle";
import installDependecies from "./utils/installDependecies";

export const main = async () => {
  renderTitle();
  //ask for a specified package manager and install with it by default use bun.
  cloneRepo();
  installDependecies("npm")
  process.exit(0);
};

main().catch((err) => {
  console.error("Aborting installation...");
  if (err instanceof Error) {
    console.error(err);
  } else {
    console.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});