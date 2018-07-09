const Koa = require('koa'),
    _ = require('koa-route'),
    app = new Koa();

const router = {
    index: (ctx) => {
        //doSomethings
        ctx.throw(500, '我是故意的！');
    }
};

app.use(_.get('/', router.index)).on('error', (err, ctx) => {
    console.error('error', err);
}).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');

/*error { InternalServerError: 我是故意的！
    at Object.throw (C:\project\test\koa-demo\node_modules\koa\lib\context.js:93:11)
    at Object.index (C:\project\test\koa-demo\lesson9.js:8:18)
    at C:\project\test\koa-demo\node_modules\koa-route\index.js:39:44
    at dispatch (C:\project\test\koa-demo\node_modules\koa-compose\index.js:42:32)
    at C:\project\test\koa-demo\node_modules\koa-compose\index.js:34:12
    at Application.handleRequest (C:\project\test\koa-demo\node_modules\koa\lib\application.js:150:12)
    at Server.handleRequest (C:\project\test\koa-demo\node_modules\koa\lib\application.js:132:19)
    at Server.emit (events.js:182:13)
    at parserOnIncoming (_http_server.js:654:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:109:17) message: '我是故意的！' }*/
