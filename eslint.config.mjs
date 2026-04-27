import nextConfig from "eslint-config-next";

// nextConfig[1] is the "next/typescript" entry that registers @typescript-eslint
const tsPlugin = nextConfig[1].plugins["@typescript-eslint"];

const eslintConfig = [
  ...nextConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    rules: {
      "@next/next/no-img-element": "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
