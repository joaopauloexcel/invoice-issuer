const path = require("path"),
    webpack = require("webpack"),
    HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "development",
    "context": __dirname,
    "entry": [
        path.resolve(__dirname, "angular/js/main.js")
    ],
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": '/',
        "filename": "js/bundle.js"
    },
    "module": {
        "rules":[
            { 
                "test": /\.css$/, 
                "use": [ 'style-loader', 'css-loader' ] 
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": 'babel-loader',
            },
            {
                "test": /\.html$/,
                "use": {
                    "loader": "html-loader"
                }
            },
            {
                "test":  /\.(jpe?g|png|gif|ico)$/i,
                "loader": "file-loader?name[name].[ext]",
            },
            {
                "test": /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                "loader": "url-loader?limit=10000&mimetype=application/font-woff"

            }
        ],
    },
    "devServer": {
        "historyApiFallback": {
            "disableDotRule": true
        },
        "host": '0.0.0.0',
        "port": 8080,
        "stats": "minimal"
    },
    "plugins": [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            "template": "./angular/index.html",
            "filename": "./index.html"
        }),
        new webpack.EnvironmentPlugin({
            "ANALYTICS_ENV": "dev",
        })
    ]
};
