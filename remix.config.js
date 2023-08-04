/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 5000,
  ignoredRouteFiles: ['**/.*'],
  serverConditions: ['worker'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
		v2_headers: true,
    v2_normalizeFormMethod: true,
    v2_meta: false,
    v2_routeConvention: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
