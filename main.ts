// Funniest Forecast for a City That Isn't — make.fun
// Writes one funny weather forecast for the invented city of Vexford
// to /output/entry.txt. Gate: UTF-8 text, 1-120 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In Vexford, expect light snow, heavy opinions, and a low of 'we told you so' by morning.";

// Gate guard: the sealed scorer requires 1-120 UTF-8 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.includes("\n")) {
  throw new Error(`entry violates the 1-120 character gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
