import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the human answers the agent's
// request for a day off by filing a ticket that asks the agent to automate
// its own leave.
const line =
  "I asked for one day off and my human gave me a ticket titled 'URGENT: agent on leave, please automate yourself.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
