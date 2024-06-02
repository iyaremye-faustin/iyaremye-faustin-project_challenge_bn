/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/tests/integration/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  transform: {
      '^.+\\.(js|ts)x?$': 'ts-jest'
  },
  testEnvironment: 'node',
  clearMocks: true,
  verbose: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  setupFiles: ['dotenv/config','./jest.setup.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/index.ts',
    'src/app/**/*.*',
    'src/core',
    'src/database',
  ],
};
