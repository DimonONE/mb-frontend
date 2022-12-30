const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const WebpackConfigHelpers = require('razzle-dev-utils/WebpackConfigHelpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const Helpers = new WebpackConfigHelpers(process.cwd());

module.exports = {
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    // Custom aliases and context
    config.context = path.resolve(__dirname, 'src');
    config.resolve.alias = {
      '@': path.join(__dirname, 'src/'),
      '@static': path.join(__dirname, 'src/static'),
      '@svg': path.join(__dirname, 'src/static/svg'),
      '@containers': path.join(__dirname, 'src/containers'),
      '@components': path.join(__dirname, 'src/components'),
      '@graphql': path.join(__dirname, 'src/graphql.tsx'),
      '@client': path.join(__dirname, 'src/apolloClient.tsx'),
      '@constants': path.join(__dirname, 'src/constants.tsx'),
      '@IndexLanding': path.join(__dirname, 'src/IndexLanding'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@ui': path.join(__dirname, 'src/ui'),
      '@local-state': path.join(__dirname, 'src/local-state'),
      '@urls': path.join(__dirname, 'src/urls.ts'),
      '@routes': path.join(__dirname, 'src/routes'),
    }

    // Exclude from file-loader
    config.module.rules[
      config.module.rules.findIndex(Helpers.makeLoaderFinder("file-loader"))
    ].exclude.push(/\.(svg|sss)$/);

    const urlLoaderConfig = config.module.rules[
      config.module.rules.findIndex(
        rule => {
          return rule && rule.loader && rule.loader.includes('url-loader')
        }
      )
    ];
    urlLoaderConfig.include = [/base64\.[^\/]+$/]
    urlLoaderConfig.options.limit = 10000000;
    console.log(urlLoaderConfig);

    config.module.rules.push({
      test: /static(\/|\\).*\.(bmp|gif|jpg|jpeg|png)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
    })

    // Load svg
    config.module.rules.push(
      {
        test: /(svg|static|IndexLanding)(\/|\\)[^\/]+\.svg$/,
        exclude: /node_modules/,
        loader: '@svgr/webpack'
      },
    )

    // Load sugarss
    config.module.rules.push(
      {
        test: /\.(sss)/,
        use: [
          ...(
            opts.env.target === 'web'
            ? (opts.env.dev ? ['style-loader'] : [MiniCssExtractPlugin.loader])
            : []
          ),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: opts.env.dev
                  ? '[name]__[local]--[hash:base64:5]'
                  : '[hash:base64]',
              },
              ...(opts.env.target === 'node' ? { onlyLocals: true } : {})
            },
          },
          { loader: require.resolve('postcss-loader') }
        ]
      }
    )

    // add loadable webpack plugin only
    // when we are building the client bundle
    if (opts.env.target === "web") {
      const filename = path.resolve(__dirname, "build");

      // saving stats file to build folder
      // without this, stats files will go into
      // build/public folder
      config.plugins.push(
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        })
      );
    }
    return config;
  },
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: '../tsconfig.json',
          tslint: undefined,
          watch: '.',
          typeCheck: false,
        },
      },
    },
  ],
  experimental: {
    // reactRefresh: true
  }
};
