module.exports = {
  publicPath: '',
  chainWebpack: config => {
    config.devtool('source-map');
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .rule('json')
      .test(/\.json$/)
      .use('json-loader')
      .loader('json-loader')
      .end();
    }
};