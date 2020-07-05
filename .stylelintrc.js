module.exports = {
  "plugins": ["stylelint-scss"],
  "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
  "rules": {
    "at-rule-name-case": "lower",
    "at-rule-no-unknown": null,
    "color-hex-case": "upper",
    "declaration-colon-newline-after": null,
    "font-family-no-missing-generic-family-keyword": null,
    "font-weight-notation": null,
    "function-name-case": null,
    "max-line-length": null,
    "no-descending-specificity": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": "^[a-z0-9]+([-_]+[a-z0-9]+)*?$",
    "selector-id-pattern": "^[a-z0-9]+(-+[a-z0-9]+)?$",
    "value-list-comma-newline-after": "never-multi-line"
  }
}