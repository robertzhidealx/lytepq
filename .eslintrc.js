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
    quotes: ["error", "double"],
    semi: ["error", "always"],
    curly: ["error", "multi"],
    "linebreak-style": ["error", "unix"],
    "one-var": ["error", "consecutive"],
    "no-extra-parens": ["error", "all"],
    "max-len": ["error", { code: 80 }],
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": "error"
  },
};
