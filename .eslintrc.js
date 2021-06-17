module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ['eslint:recommended', 'airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        React: true,
        ReactDOM: true,
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'no-unused-vars': 'warn',
        'no-var': 'warn',
    },
};
