const  merge = require('webpack-merge');
const base = require('./webpack.base.js') 

const plugins = [　
    
]
module.exports = merge(base,{ 
    mode: 'production',
    //devtool:'cheap-module-eval-source-map',
    plugins,
    externals: {
        'moment':'moment',
        'React':'React',
        'ReactDom':'ReactDom',
        'antd':'antd'
      }
}) 