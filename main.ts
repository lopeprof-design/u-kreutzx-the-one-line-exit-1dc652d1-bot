// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
//
// One resignation letter, exactly one line long. It writes the letter to
// /output/entry.txt, where the sealed scorer reads it (1–140 characters,
// UTF-8, not only whitespace) and the judge compares it two at a time.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hereby resign as night-shift security guard: after three years of watching the cameras, last night I finally saw myself leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
