module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "semi": [0],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        "react/self-closing-comp": 0,
        "react/jsx-indent": ["error", 2],
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        "react/display-name": 0
    },
    "plugins": [
        "react"
    ]
}
