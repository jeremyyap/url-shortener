module.exports = {
  "preset": "ts-jest",
  "setupFiles": [
    "<rootDir>/test-setup.js"
  ],
  "roots": [
    "<rootDir>/app/javascript/packs/react"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
