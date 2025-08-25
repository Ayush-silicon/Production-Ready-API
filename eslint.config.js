import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "warn", // Warn instead of auto-fix
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);
