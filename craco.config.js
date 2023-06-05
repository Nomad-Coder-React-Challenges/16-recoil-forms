const CracoAlias = require('craco-alias');

module.exports = {
  typescript: {
    enableTypeChecking: true /* (default value)  */,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};
