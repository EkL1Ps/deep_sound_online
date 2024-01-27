module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "quotes": ["warn", "double"],
        "jsx-quotes": ["error", "prefer-double"],
        "semi": ["warn", "always"],
        "no-console": "warn",
        "no-extra-boolean-cast": "off",
    "no-unused-expressions": "warn",
    "no-sequences": "off",
    // "no-restricted-globals": "off",
    "no-undef": "off",
    "no-prototype-builtins": "warn",
    "no-empty": "warn",
    "no-useless-catch": "warn",
    "no-unsafe-finally": "warn",
    "no-misleading-character-class": "warn",
    "no-mixed-operators": "off",
    "default-case": "off",
    "no-fallthrough": "warn",
    "no-useless-escape": "off",
    "eqeqeq": "off",
    "no-use-before-define": "off"
    },
    ignorePatterns: [".eslintrs.js"],
};
