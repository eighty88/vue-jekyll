const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    entry: {
        index: path.join(__dirname, "src", "main.js"),
    },
    output: {
        filename: "../_site/js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../_site/images/[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "_site", "index.html"),
            inject: "head",
            filename: "../_site/index.html"
        }),
        new VueLoaderPlugin()
    ]
}