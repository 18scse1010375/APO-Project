module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "browser": true

    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": { "jsx": false }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts"] }],
        "@typescript-eslint/no-explicit-any": ["off"] ,
    },
    "settings": {
        "react": { "version": "detect" }


    }
}
