import buble from "@rollup/plugin-buble";
import multi from "@rollup/plugin-multi-entry";

const config = [
  {
    input: "src/**/index.js",
    output: {
      name: "Lyte",
      file: "lib/index.js",
      format: "umd",
      exports: "auto",
      indent: false,
    },
    plugins: [buble(), multi({ exclude: ["src/index.js"] })],
  }
];

export default config;
