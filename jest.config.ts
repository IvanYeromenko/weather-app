import type { Config } from "jest";

export default {
  verbose: false,
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/react-native/extend-expect"],
  setupFiles: ["@shopify/react-native-skia/jestSetup.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.[jt]s?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "\\.svg": "<rootDir>/__mocks__/svg-mock.js",
    "^.*/social-media-video-sharing$":
      "<rootDir>/__mocks__/social-media-video-sharing-mock.ts",
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    "!<rootDir>/src/**/mock/**",
    "!**/__mocks__/**",
  ],
  maxWorkers: `50%`,
} satisfies Config;
