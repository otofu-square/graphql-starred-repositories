module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["react-hooks"],
  rules: {
    "prefer-destructuring": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
