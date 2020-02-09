const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/request_config",
    proxy({
      target: "http://localhost",
      changeOrigin: true
    })
  );
};
