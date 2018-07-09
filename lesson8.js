const Koa = require('koa'),
    _ = require('koa-route'),
    app = new Koa();

const router = {
    '403': (ctx) => {
        //doSomethings
        ctx.throw(403, '403啦！');
    },
    '404': (ctx) => {
        //doSomethings
        ctx.status = 404;
        ctx.body = `<p>404啦！</p>`;
    }
};

app.use(_.get('/403', pets[403])).use(_.get('/404', pets[404])).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
