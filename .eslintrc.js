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
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }]
  }
};
