/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  moduleDirectories: [
    "<rootDir>",
    "src",
    "node_modules",
  ],
};