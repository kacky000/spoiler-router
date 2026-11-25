// The home router's excuse for dropping out at the movie's climax.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse = "I didn't drop it. I've seen how it ends, and honestly, you're not ready.";
const limit = 200;

if ([...excuse].length > limit) throw new Error("excuse is over 200 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse);
