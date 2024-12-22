const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaults = getDefaultConfig(__dirname);
const { sourceExts, assetExts } = defaults.resolver;

/**
 * Metro configuration
 * * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
        resetCache: true,
      },
    }),
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    unstable_enableSymlinks: true,
    resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

module.exports = mergeConfig(defaults, config);
