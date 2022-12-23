#! /usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import { join } from "path";

import { getExecutionTime, timerOn } from "./timer";
import { showEndBanner, showDetail, showInfo, showTitleAndBanner } from "./logger";

interface CLI {
  bio?: boolean;
}

interface Character {
  id: number;
  name: string;
  bio?: string;
}

const program = new Command();

program
  .version("0.0.1")
  .usage("[options]")
  .description("Reveal a random character in termninal from Harry Potter")
  .option("-b, --bio", "Show BIO of character")
  .action(function () {
    const { bio }: CLI = program.opts();
    showInfo(`Running Synchronizer CLI`);
    showTitleAndBanner();
    main(bio);
  })
  .parse(process.argv);

function main(bio = false): void {
  const initialTime = timerOn();
  const character = getCharacter();

  showDetail(character.name);
  if (bio && character.bio) {
    showInfo(character.bio);
  }
  showEndBanner();
  showInfo(`Execution time is: ${getExecutionTime(initialTime)}`);
  // close execution
  process.exit();
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getCharacter(): Character {
  const randomInt = getRandomInt(64);

  const file = join(process.cwd(), "./characters.json");
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    return data[randomInt];
  } catch {
    process.exit();
  }
}
