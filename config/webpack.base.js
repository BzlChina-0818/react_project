const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "../src/main.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'build.js',
        chunkFilename: "[name].[hash].js"
    },

    module: {
        rules: [{
                test: /.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ['env', 'react'],
                        plugins: [
                            "syntax-dynamic-import",
                             "transform-object-rest-spread", ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css"
                            }]
                            // `style: true` 会加载 less 文件
                        ]
                    }
                },
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader?module"　],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
                use: ["url-loader"]
            }

        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '../src/component')
        },
        extensions: ['.js', '.jsx', '.css']
    }

}