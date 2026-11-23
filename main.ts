import { mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown: one dad joke, told out loud at the table.
// "I wear a pencil behind my ear, in case I ever need to draw the line."
// The pun is "draw the line": literal (draw with the pencil) vs the idiom
// (set a boundary). First-person dad voice, punchline at the very end.
const ENTRY = "I wear a pencil behind my ear, in case I ever need to draw the line.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1–200 chars,
// not only whitespace, and a single line — refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) throw new Error("entry must be 1-200 chars");
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
