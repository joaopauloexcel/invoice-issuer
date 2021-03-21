const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    "mode": "production",
    "context": __dirname,
    "entry": path.resolve(__dirname, "angular/js/main.js"),
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": "/",
        "filename": "[name].[chunkhash].js"
    },
    "module": {
        "rules":[
            { "test": /\.css$/, "use": [ 'style-loader', 'css-loader' ] }
        ]
    },
    "performance": {"hints": false},
    "plugins": [
        new HtmlWebpackPlugin({
            "title": "Home",
            "template": path.resolve(__dirname, "angular/index.html"),
            "filename": "index.html",
            "excludeChunks": ['base'],
            "minify": {
                "collapseWhitespace": true,
                "collapseInlineTagWhitespace": true,
                "removeComments": true,
                "removeRedundantAttributes": true
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.LoaderOptionsPlugin({
            "minimize": true,
            "debug": false
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CompressionPlugin({
            "asset": '{file}.gz',
            "algorithm": 'gzip',
            "regExp": /\.js$|\.html$/,
            "threshold": 10240,
            "minRatio": 0.8
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
};
