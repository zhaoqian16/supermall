module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network'
      }
    }
  }
}