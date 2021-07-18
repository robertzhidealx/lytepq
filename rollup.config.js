import buble from "@rollup/plugin-buble";
import multi from "@rollup/plugin-multi-entry";
import dts from "rollup-plugin-dts";

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
    plugins: [buble(), multi()],
  },
  {
    input: "src/**/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [dts(), multi()],
  }
];

export default config;
