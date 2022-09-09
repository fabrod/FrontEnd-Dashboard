module.exports = {
  globals: {
    window: true,
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  testURL: "https://localhost/v1",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx", "json", "node"],
  // only include tests that ends with 'spec' or 'test' even if inside __tests__ folder
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testResultsProcessor: "jest-teamcity-reporter",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@material | @kmx)/"],
  setupFiles: [
    "<rootDir>/config/test-shim.js",
    "<rootDir>/config/test-setup.js",
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/api/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 70,
      statements: 70,
    },
  },
  coveragePathIgnorePatterns: [
    "/api",
    "/node_modules/",
    "/config/",
    "/legos/",
    "/src/legos-overrides/",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "@legos-overrides": "<rootDir>/src/legos-overrides",
    "@utilities": "<rootDir>/src/utilities",
    "@layout": "<rootDir>/src/layout",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
};
