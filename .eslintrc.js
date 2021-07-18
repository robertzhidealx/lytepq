module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "one-var": ["error", "consecutive"],
    "no-extra-parens": ["error", "all"],
    curly: ["error", "multi"],
    "max-len": ["error", { code: 80 }],
    "object-curly-spacing": ["error", "always"]
  },
};
