const Koa = require('koa'),
    app = new Koa();

const err = async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.throw(404, '你看看終端有沒打印錯誤！');
        }
    },
    index = ctx => {
        ctx.throw(500);
    };

app.use(err).use(index).on('error', function(err) {
    console.error('error', err)
}).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
