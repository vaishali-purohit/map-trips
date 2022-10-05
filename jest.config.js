/* eslint-disable no-undef */
// Sync object
const config = {
  verbose: true,
};

module.exports = config;

module.exports = async () => {
  return {
    verbose: true,
    roots: ['<rootDir>/src'],
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.jsx', '.tsx'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    transformIgnorePatterns: ['/node_modules/'],
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    globals: {
      'babel-jest': {
        diagnostics: false,
      },
      window: {},
    },

    // Setup Enzyme
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/fileMock.tsx',
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
  };
};
