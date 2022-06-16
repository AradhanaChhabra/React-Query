module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // added prettier here for eslint-config-prettier package: to avoid eslint issues with prettier formatting
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "spaced-comment": "off",
    "require-jsdoc": "off",
  },
  // to solve a bug where it will not detect the version of code
  settings: {
    react: {
      version: "detect",
    },
  },
};
