module.exports = {
  root: true,
  extends: [
    "airbnb",
    "react-app",
    "eslint:recommended"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-constant-condition": "off",
    "global-require": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/default-props-match-prop-types": "off",
    "react/no-unused-prop-types": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/no-extraneous-dependencies": "off",
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }]
  }
};
