import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',  // Provide the path to your Next.js app
});

const config: Config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  
  // Add this line to include the setup file
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Ensure this path is correct

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
  ],
};

// Export the config using createJestConfig
export default createJestConfig(config);
