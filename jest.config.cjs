module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/',
  ],
}
