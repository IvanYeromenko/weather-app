module.exports = function override(api) {
  const env = api.cache(() => process.env.NODE_ENV);
  const isProd = env === "production";

  const config = {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
      "@babel/plugin-transform-flow-strip-types",
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.ts",
            ".android.ts",
            ".js",
            ".ts",
            ".tsx",
            ".json",
          ],
          alias: {
            "@": "./src",
          },
        },
      ],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      /* Reanimated plugin has to be listed last. */
      "react-native-reanimated/plugin",
    ],
  };

  if (isProd) {
    config.plugins.push("transform-remove-console");
  }

  return config;
};
