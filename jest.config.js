module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'mjs', 'json'],
  transformIgnorePatterns: ['node_modules/(?!(your-esm-modules)/)'],
};
