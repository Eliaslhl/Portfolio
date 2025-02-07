const path = require('path');

module.exports = {
    // Votre configuration Webpack existante
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                enforce: 'pre',
                exclude: /node_modules\/@mediapipe\/tasks-vision/,
                use: ['source-map-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    ignoreWarnings: [
        (warning) =>
            warning.message.includes('Failed to parse source map from') &&
            warning.message.includes('node_modules/@mediapipe/tasks-vision'),
    ],
};
