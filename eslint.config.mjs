import antfu from "@antfu/eslint-config";
import globals from "globals";

export default antfu(
  {
    lessOpinionated: true,
    node: false,
    typescript: false,
    jsx: false,
    test: false,
    vue: false,
    yaml: false,
    toml: false,
    stylistic: {
      quotes: "double",
      jsx: false,
      semi: true,
      braceStyle: "1tbs",
    },
    formatters: {
      css: true,
      markdown: true,
    },
    isInEditor: true,
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.greasemonkey,
        Grant: "readonly",
        Magnet: "readonly",
        Offline: "readonly",
        Req: "readonly",
        Req115: "readonly",
        ReqDB: "readonly",
        ReqMagnet: "readonly",
        ReqSprite: "readonly",
        ReqTrailer: "readonly",
        Store: "readonly",
        Util: "readonly",
        Verify115: "readonly",
      },
    },
    rules: {
      "curly": ["error", "multi-line", "consistent"],
      "style/arrow-parens": ["error", "always"],
    },
  },
);
