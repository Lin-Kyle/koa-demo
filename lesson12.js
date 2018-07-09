const Koa = require('koa'),
    app = new Koa();

const err = async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = 404;
            ctx.body = `<p>你看看終端有沒打印錯誤！</p>`;
            ctx.app.emit('error', err, ctx);
        }
    },
    index = ctx => {
        ctx.throw(500);
    };

app.use(err).use(index).on('error', function(err) {
    console.error('error', err)
}).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');

// error { InternalServerError: Internal Server Error
//     at Object.throw (C:\project\test\koa-demo\node_modules\koa\lib\context.js:93:11)
//     at index (C:\project\test\koa-demo\lesson12.js:14:18)
//     at dispatch (C:\project\test\koa-demo\node_modules\koa-compose\index.js:42:32)
//     at err (C:\project\test\koa-demo\lesson12.js:6:19)
//     at dispatch (C:\project\test\koa-demo\node_modules\koa-compose\index.js:42:32)
//     at C:\project\test\koa-demo\node_modules\koa-compose\index.js:34:12
//     at Application.handleRequest (C:\project\test\koa-demo\node_modules\koa\lib\application.js:150:12)
//     at Server.handleRequest (C:\project\test\koa-demo\node_modules\koa\lib\application.js:132:19)
//     at Server.emit (events.js:182:13)
//     at parserOnIncoming (_http_server.js:654:12) message: 'Internal Server Error' }
