module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],//Please first add tsconfig files settings
      alias: {
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@constants": "./src/constants",
        "@navigation": "./src/navigation",
        "@screens": "./src/screens",
        "@services": "./src/services",
        "@styles": "./src/styles"
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],

  ]
};
