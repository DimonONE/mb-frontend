const path = require('path');

const cssVars = require(path.join(__dirname, 'src/postcss.vars.js'));

const plugins = [
  require('postcss-variables')({ globals: cssVars }),
  require('postcss-extend'),
  require('precss')()
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  )
}

module.exports = ({ file }) => ({
  plugins,
  parser: file && file.extname === '.sss' ? 'sugarss' : false
});
