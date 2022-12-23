import { green, cyan, magenta } from "kleur";
import figlet from "figlet";

import { ConsoleMessage } from "./console-message";

const newLine = "\n";

export const showTitleAndBanner = (): void => {
  console.log(newLine);
  console.log(cyan(figlet.textSync(ConsoleMessage.TITLE, { font: "Alligator2", horizontalLayout: "full" })));
};

export const showInfo = (message: string): void => {
  console.info(magenta(message) + newLine);
};

export const showDetail = (message: string): void => {
  console.log(green(figlet.textSync(message, { font: "Caligraphy" })));
};

export const showEndBanner = (): void => {
  console.log(newLine);
  console.log(cyan(figlet.textSync(ConsoleMessage.FINISHED, { font: "Alligator2", horizontalLayout: "full" })));
};
