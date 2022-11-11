module.exports = {
  printWidth: 125,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 4,
  semi : false,
  // Override any other rules you want
};

{
  "prettier/prettier" [
    "error",
    {
      "singleQuote": true,
      "parser": "flow"
    }
  ]
}
