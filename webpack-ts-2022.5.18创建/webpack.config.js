const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'webpack',
            template: './public/index.html'
        }),
        // 新版本clearWebpackPlugin不需要传入清理的目录，其会自动清理webpack配置中output的路径
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                        }
                    }
                ]
            }
        ]
    },
}