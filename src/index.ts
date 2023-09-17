#!/usr/bin/env node

import { renderTitle } from "./utils/getTitle";

const main = async () => {
  renderTitle();
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