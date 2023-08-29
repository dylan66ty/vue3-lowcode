const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-esm-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('monaco').use(new MonacoWebpackPlugin())
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js/,
          enforce: 'pre',
          include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
          use: MonacoWebpackPlugin.loader
        }
      ]
    }
  },
  devServer: {
    client: {
      overlay: {
        runtimeErrors: false
      }
    },
    proxy: {
      '/demo': {
        target: 'http://192.168.20.173:9009',
        changeOrigin: true,
        pathRewrite: {
          '^/demo': '/'
        }
      }
    }
  }
})
