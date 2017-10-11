const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix : isProd ? 'https://druphiny.b-cdn.net' : '',
  webpack     : ( config ) => {
    config.node               = { fs  : 'empty' };

    return config
  },
}
