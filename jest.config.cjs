// jest.config.cjs
module.exports = {
    testEnvironment: 'node',
    transform: {},
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    collectCoverage: true,
    coverageDirectory: 'coverage'
  };
  