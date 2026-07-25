/** @type {import("stylelint").Config} */
export default {
  ignoreFiles: [
    "**/node_modules/**",
    "**/*.min.css",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
  ],
  rules: {
    "order/order": ["custom-properties", "declarations", "rules"],
    "no-descending-specificity": null,
    "selector-class-pattern": null,
  },
};
