# vite-dts-config-dir-test

Run the following commands:

`pnpm i`

`pnpm run build` // Prints Dts File Exists: true

`pnpm run build-config-dir` // Prints Dts File Exists: false, this script is running the build using the tsconfig that has the ${configDir} reference