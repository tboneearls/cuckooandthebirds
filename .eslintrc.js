module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  plugins: [
    "vue",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "vue/no-v-html": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "registeredComponentsOnly": false,
      "ignores": [],
    }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "functions": "always-multiline",
      "imports": "never",
      "exports": "never",
    }],
    "eol-last": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "prefer-template": ["error"],
    semi: ["error", "always"],
    eqeqeq: ["error", "smart"],
    quotes: [2, "double", { avoidEscape: true }],
  },
};
