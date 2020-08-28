/*
 * @Date: 2020-04-16 10:15:06
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-08-25 18:33:27
 */
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    render: {
        resourceHints: false,
        ssr: false
    },
    head: {
        title: 'Creative',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'mint-ui/lib/style.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/mint-ui',
        '@/plugins/element-ui',
        '@/plugins/axios',
        '@/plugins/persistedstate',
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    /*
    ** Build configuration
    */
    build: {
        transpile: [
            /^element-ui/,
            /^mint-ui/,
        ],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        },
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3333'
    },
}
