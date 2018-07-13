const path = require('path');
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')
const plugins = [　
    new webpack.HotModuleReplacementPlugin()
]
module.exports = merge(base, {
        mode:'development',
        devServer: {
            port:8099,
            //强制页面访问index.html
            historyApiFallback:true,
            //实时刷新
            inline: true,
            //支持模块热更新
            hot: true,
            open: true,
            chunkFilename:'[name].[hash].js'
        },
        devtool:'eval-source-map',
    
        plugins
    })

