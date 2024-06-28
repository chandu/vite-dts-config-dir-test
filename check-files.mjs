import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';    

const __dirname = dirname(fileURLToPath(import.meta.url));

const run = () => {
    const dtsFileExists = existsSync(join(__dirname, "dist", "index.d.ts"))
    console.log(`Dts File Exists: ${dtsFileExists}`);
};

run();