module.exports = {
  assetsDir: 'static',
  publicPath: './',
  chainWebpack: config => {
    config.resolve.extensions
      .add('ts')
      .add('tsx');
  }
};