const {createProxyMiddleware} = require('http-proxy-middleware')


console.log(1111);
module.exports = function (app) {
    console.log(222);
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://10.0.0.45:8080',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    )
}
