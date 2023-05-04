const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};