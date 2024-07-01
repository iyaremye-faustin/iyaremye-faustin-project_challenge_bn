const dotenv = require('dotenv');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || 'test';
dotenv.config({ path: `.env.${env}` });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  clearMocks: true,
  verbose: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
	coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/index.ts',
    'src/app/**/*.*',
    'src/core',
    'src/database',
  ],
  setupFilesAfterEnv: ['dotenv/config'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
