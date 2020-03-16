module.exports = {
  plugins: [
    [
      'relay',
      {
        artifactDirectory: './src/__generated__'
      }
    ]
  ],
  presets: ['react-app']
};
