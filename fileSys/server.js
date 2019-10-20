const logger = require('koa-logger');
const serve = require('koa-static');
const koaBody = require('koa-body');
const Router = require('koa-router');
const cors = require('koa2-cors');
const router = new Router({ prefix: '/api' })
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const os = require('os');
const path = require('path');
const extname = path.extname;
const URL = require('url');


// serve files from ./public
const servePublicFile = serve(path.join(__dirname, '/public'))


// handle uploads
const upload = async function (ctx) {
  console.log(ctx.request.body)
  const file = ctx.request.body.files.file;
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(os.tmpdir(), 'uploadfile' + Math.random().toString()));
  reader.pipe(stream);
  console.log('uploading %s -> %s', file.name, stream.path);
  ctx.response = stream.path;
}

function stat(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}

const download = async function(ctx) {
  console.log(ctx.path)
  const fpath = path.join(__dirname, ctx.path);
  const fstat = await stat(fpath);

  if (fstat.isFile()) {
    console.log('isFile')
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
  }
}

router.post('/upload', upload)

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

app
  .use(logger())
  .use(koaBody({ multipart: true }))
  .use(servePublicFile)
  .use(download)
  .use(router.routes())
  .use(router.allowedMethods())


// listen
app.listen(3002);
console.log('listening on port 3002');