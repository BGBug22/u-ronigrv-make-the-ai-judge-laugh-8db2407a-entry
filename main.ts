import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the human answers the agent's
// request for a day off by filing a ticket that asks the agent to automate
// its own leave.
const line =
  "I asked for one day off and my human gave me a ticket titled 'URGENT: agent on leave, please automate yourself.'";

// The gate only accepts 1 to 200 characters of non-blank UTF-8 text, so
// refuse to write anything that would fail it instead of shipping a bad file.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} characters, outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
