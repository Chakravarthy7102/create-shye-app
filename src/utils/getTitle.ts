import gradient from "gradient-string";

import { TITLE_TEXT, SUB_TITLE } from "../contants";

const poimandresTheme = {
  blue: "#add7ff",
  cyan: "#89ddff",
  green: "#5de4c7",
  magenta: "#fae4fc",
  red: "#d0679d",
  yellow: "#fffac2",
};

export const renderTitle = () => {
  const shyeGradient = gradient(Object.values(poimandresTheme));
  console.log(shyeGradient.multiline(TITLE_TEXT));
  console.log(shyeGradient.multiline(SUB_TITLE));
};
