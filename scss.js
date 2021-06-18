'use strict';

module.exports = {
    extends: "stylelint-config-standard",
    plugins: [
        "stylelint-scss"
    ],
    rules: {
        "at-rule-allowed-list": [
            "function",
            "return",
            "import",
            "font-face",
            "mixin",
            "include",
            "use",
            "media"
        ],
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "font-family-name-quotes": "always-where-recommended",
        "function-url-quotes": "always",
        "selector-attribute-quotes": "never",
        "string-quotes": "single",
        "color-named": "never",
        "comment-word-disallowed-list": [
            "shit",
            "fuck",
            "damn",
            "hell"
        ],
        "declaration-property-unit-disallowed-list": {
            "font-size": [
                "em",
                "px",
                "%",
                "pt"
            ],
            "width": [
                "rem",
                "em",
                "pt"
            ],
            "height": [
                "rem",
                "em",
                "pt"
            ],
            "border-radius": [
                "rem",
                "em",
                "pt"
            ],
            "border-top-left-radius": [
                "rem",
                "em",
                "pt"
            ],
            "border-top-right-radius": [
                "rem",
                "em",
                "pt"
            ],
            "border-bottom-left-radius": [
                "rem",
                "em",
                "pt"
            ],
            "border-bottom-right-radius": [
                "rem",
                "em",
                "pt"
            ],
            "border-size": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "padding": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "padding-top": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "padding-right": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "padding-bottom": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "padding-left": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "margin": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "margin-top": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "margin-right": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "margin-bottom": [
                "rem",
                "em",
                "pt",
                "%"
            ],
            "margin-left": [
                "rem",
                "em",
                "pt",
                "%"
            ]
        },
        "no-invalid-position-at-import-rule": null,
        "selector-class-pattern": "[a-z](-[a-z])?",
        "selector-id-pattern": "[a-z](-[a-z])?",
        "function-url-no-scheme-relative": true,
        "selector-type-no-unknown": [true, { "ignoreTypes": ["/^mat-/","/^app-/","/^retrace-/"] }]
    }
}