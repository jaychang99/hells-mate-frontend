module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "next/core-web-vitals", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {
    "require-jsdoc": "off",
    "react/display-name": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // react > next > @ > a~z
          ["^react$", "^next", "^@", "^[a-z]"],
          // ~
          ["^~"],
          // ./ > ../ > ../../
          ["^\\./?$", "^\\.(?!/?$)", "^\\./(?=.*/)(?!/?$)", "^\\.\\./?$", "^\\.\\.(?!/?$)"],
          // Side effect imports
          ["^\\u0000"],
        ],
      },
    ],
    "unused-imports/no-unused-imports-ts": "error",
    quotes: ["error", "double"], // 문자열 들을 쌍따옴표로 감싸도록 강제
  },
};
