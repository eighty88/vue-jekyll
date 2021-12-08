const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    entry: {
        index: path.join(__dirname, "src", "main.js"),
    },
    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: "bundle.js"
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
                            name: './images/[name].[ext]'
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
        new VueLoaderPlugin()
    ]
}