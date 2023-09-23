#!/usr/bin/env node

import { cloneRepo } from "./utils/cloneRepo";
import { renderTitle } from "./utils/getTitle";
import startProject from "./utils/startProject";

const main = async () => {
  renderTitle();
  cloneRepo();
  await startProject()
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