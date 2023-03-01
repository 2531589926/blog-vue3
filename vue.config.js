module.exports = {
    // 基本路径
    publicPath: './',
    // 构建时的输出目录
    outputDir: 'dist',
    // 放置静态资源的目录
    assetsDir: 'static',
    // html 的输出路径
    indexPath: 'index.html',
    //文件名哈希
    filenameHashing: true,
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    lintOnSave: false,
    // 是否使用带有浏览器内编译器的完整构建版本
    runtimeCompiler: false,
    // babel-loader 默认会跳过 node_modules 依赖。
    transpileDependencies: [ /* string or regex */],
    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,
    // 设置生成的 HTML 中 <link rel='stylesheet'> 和 <script> 标签的 crossorigin 属性。
    crossorigin: '',
    // 在生成的 HTML 中的 <link rel='stylesheet'> 和 <script> 标签上启用 SubResource Integrity (SRI)。
    integrity: false,
    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        extract: true,

        // 是否开启 CSS source map？
        sourceMap: false,

        // 为预处理器的 loader 传递自定义选项
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                data: `@import "@/common/my-variables.scss";`
            }
        },

        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },
    // 调整内部的 webpack 配置
    configureWebpack: () => {
    }, //(Object | Function)
    chainWebpack: () => {
    },
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 7005,
        https: false,
        hotOnly: false,
        proxy: {
            // 接口地址代理
            '/ytxy': {
                target: 'http://localhost:8899', // 接口的域名
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            },
        }
    },
    // 三方插件的选项
    pluginOptions: {
        // ...
    }
}
