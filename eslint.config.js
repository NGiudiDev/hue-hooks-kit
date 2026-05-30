import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["/dist", "/node_modules", "/storybook-static"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    rules: {
      "eol-last": ["error", "never"],
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "semi": ["error", "always"],
    },
    settings: {
      react: {
        version: "19.2.6",
      }
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];