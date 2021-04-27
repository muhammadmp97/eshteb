const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.(json)",
                    to: "[name][ext]"
                },
            ],
        }),
    ]
};