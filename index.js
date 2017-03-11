// #################
// ###  Plugins  ###
// #################
const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const permalinks  = require('metalsmith-permalinks');
const less        = require('metalsmith-less');

// #################
// ###  Options  ###
// #################
const layoutsOptions = {
  engine: 'handlebars',
  partials: 'layouts/partials',
  rename: true
};

const lessOptions = {
  pattern: ['**/milligram.less']
}

// #################
// ###   Build   ###
// #################
Metalsmith(__dirname)
  .metadata({
    title: "Hot Chicks, Down to Lay",
    description: "Watch this little chickens run wild.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({layoutsOptions}))
  .use(less(lessOptions))
  .build(function(err, files) {
    if (err) { throw err; }
  });
