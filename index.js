module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  plugins: ["prettier", "react-hooks"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules"],
        paths: ["src/"]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "import/no-cycle": 0,
    "react/no-array-index-key": 0,
    "no-console": 0,
    "max-len": 0,
    "no-nested-ternary": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react-hooks/rules-of-hooks": 1,
    "react-hooks/exhaustive-deps": 1, // Checks effect dependencies
    "react/forbid-prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": [
      1,
      "always",
      {
        ignoreClassFields: true
      }
    ],
    "no-use-before-define": 0,
    "valid-jsdoc": [
      "error",
      {
        requireReturn: true,
        requireReturnType: true,
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ],
    "no-underscore-dangle": 0
  }
};

// 0 - ignore, 1 - warn, 2 - error
