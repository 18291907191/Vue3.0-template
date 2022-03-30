module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'important',{
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }, 'vant'
    ]
  ]
}