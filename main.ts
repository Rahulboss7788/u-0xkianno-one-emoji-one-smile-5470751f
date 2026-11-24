// One Emoji, One Smile — writes exactly one warm smile to /output/entry.txt.
//
// The chosen emoji is the smiling face with smiling eyes: a gentle, warm,
// universally readable smile — the kind most likely to make a stranger smile
// at a glance, with no words, caption, or explanation attached.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "😊";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Read-back self-check: the written entry must be exactly one emoji,
// 1 to 8 characters, and not only white space — the competition's gate.
const written = readFileSync("/output/entry.txt", "utf8");
const codePoints = [...written].length;
if (codePoints < 1 || codePoints > 8 || written.trim().length === 0) {
  throw new Error(`Invalid entry: ${codePoints} code points, not a single emoji`);
}
