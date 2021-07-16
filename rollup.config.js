import buble from "@rollup/plugin-buble";

export default {
  input: "src/index.js",
  output: {
    name: "LytePQ",
    file: "lib/index.js",
    format: "umd",
    exports: "default",
    indent: false,
  },
  plugins: [buble()],
};
