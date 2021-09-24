module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/no-explicit-any": 2,
    "react-native/no-inline-styles": 2,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "no-shadow": 2,
    "no-console": 2,
    "eslint-comments/no-unused-disable": 0,
  },
  settings: {
    "import/parser": ["@typescript-eslint/parser"],
  },
};
