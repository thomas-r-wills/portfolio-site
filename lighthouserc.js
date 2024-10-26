module.exports = {
    ci: {
      collect: {
        staticDistDir: './out', // Update based on your build directory
        numberOfRuns: 3
      },
      assert: {
        preset: 'lighthouse:recommended'
      }
    }
  };
  