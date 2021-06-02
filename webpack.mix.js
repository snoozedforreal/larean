const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'resources/js'),
                '@assets': path.resolve(__dirname, 'resources/js/@core/assets'),
                '@components': path.resolve(__dirname, 'resources/js/@core/components'),
                '@layouts': path.resolve(__dirname, 'resources/js/@core/layouts'),
                '@store': path.resolve(__dirname, 'resources/js/redux'),
                '@styles': path.resolve(__dirname, 'resources/js/@core/scss'),
                '@configs': path.resolve(__dirname, 'resources/js/configs'),
                '@utils': path.resolve(__dirname, 'resources/js/utility/Utils'),
                '@hooks': path.resolve(__dirname, 'resources/js/utility/hooks')
            }
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ['node_modules', 'resources/js/assets']
                                }
                            }
                        }
                    ]
                },
                {
                    test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
                    loaders: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[path][name].[ext]',
                            context: 'resources/js/assets/images'
                        }
                    }
                }
            ]
        }
    })
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js'
    }
});
