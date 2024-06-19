const path = require('path')
const CracoLessPlugin = require('craco-less')
// 解析绝对路径
const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
    // 配置less
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ],
    // 配置webpack
    webpack: {
        // 配置别名
        alias: {
            '@': resolve('src'),
        }
    }
}