const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router({ prefix: '/api' })

const initService = require('./services/helloWorld.js')
const getService = require('./services/pickApi.js')


router.use(bodyParser())

function server() {
    router.get('/helloWorld', initService)
    router.get('/getPick', bodyParser(), getService)
    app.use(router.routes())
    app.use(router.allowedMethods())
    app.listen(3000);
    console.log('Listening on 3000')
}
exports.server = server;