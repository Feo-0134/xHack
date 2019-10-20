const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const cors = require('koa2-cors');
const initService = require('./services/helloWorld.js')
const getService = require('./services/pickApi.js')


router.use(bodyParser())

function server() {
    router.get('/helloWorld', initService)
    router.get('/getPick/:style', bodyParser(), getService)
    app.use(cors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return "*"; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
      }))
    
    app.use(router.routes())
    app.use(router.allowedMethods())
    app.listen(3000);
    console.log('Listening on 3000')
}
exports.server = server;