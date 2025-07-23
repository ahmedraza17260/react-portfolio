// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable CSS minimizer to avoid "Unexpected '/'" error
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
          (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
        );
      }
      return webpackConfig;
    },
  },
};
