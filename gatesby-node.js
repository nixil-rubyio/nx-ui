const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'nx-ui/lib': path.resolve(__dirname, '../components/'),
        'nx-ui/esm': path.resolve(__dirname, '../components/'),
        'nx-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};