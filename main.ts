// One Line of Earned Pride — entry program.
//
// Writes the entry line to /output/entry.txt as UTF-8 text with no
// trailing newline. Set MAKEFUN_OUTPUT_DIR to write somewhere else
// (used for local test runs). Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The scar on my left thumb came from the first violin I carved at fourteen; yesterday a stranger bought my forty-first, and played it until the whole shop went quiet.";

// The gate accepts exactly one line of 1 to 240 characters; refuse to
// write anything else rather than produce an invalid entry.
if (LINE.includes("\n") || LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line must be a single line of 1-240 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${target}`);
