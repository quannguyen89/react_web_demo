module.exports.getConfig = function(type) {

    var isDev = type === 'development';

    var config = {
        entry: './app/scripts/main.js',
        output: {
            path: __dirname,
            filename: 'main.js'
        },
        debug: isDev,
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
                {test: /\.(svg|eot|woff|ttf|png|ico|woff2)(\?.*)?$/, loader: 'file-loader'},
                {test: /\.css$/, loader: 'style-loader!css-loader'},
                {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}

            ]
        }
    };

    if (isDev) {
        config.devtool = 'eval';
    }

    return config;
};
