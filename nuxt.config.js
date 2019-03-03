var localhostConfigJs = require("./config/localhost-config.js");
var pluginsConfig = require("./plugins/plugins-config.js");

module.exports = {
  /*
  ** Headers of the page
  * html head相关配置
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //引用通用css样式
  css:['~assets/public.less'],
  plugins: pluginsConfig.pluginsArray(),
	/*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 //服务相关配置，localhost-config.js中配置
 server: localhostConfigJs.serverConfig(),
  build: {
    /*
    ** Run ESLint on save
    */
   //less相关控件
   loader:[{
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader',
    }],
    //eslint配置，编码规范
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

