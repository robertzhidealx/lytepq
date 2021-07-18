import buble from "@rollup/plugin-buble";
import multi from "@rollup/plugin-multi-entry";

export default {
  input: ["src/lytepq/index.js", "src/lytesets/index.js"],
  output: {
    name: "Lyte",
    file: "lib/index.js",
    format: "umd",
    exports: "auto",
    indent: false,
  },
  plugins: [buble(), multi()],
};
