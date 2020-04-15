/*
 * @Date: 2020-04-16 00:14:23
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-04-16 00:35:50
 */

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
	  link: [
		  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		  {
			  rel: 'stylesheet',
			  href: '//at.alicdn.com/t/font_1113798_0532l8oa6jqp.css'
		  },
		  {
			  rel: 'stylesheet',
			  href: '//at.alicdn.com/t/font_1331132_5lvbai88wkb.css'
		  }
	  ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
