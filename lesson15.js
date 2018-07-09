const Koa = require('koa'),
    koaBody = require('koa-body'),
    _ = require('koa-route'),
    fs = require('fs'),
    app = new Koa();

const router = {
        index: (ctx) => {
            //doSomethings
            ctx.type = 'html';
            ctx.body = fs.createReadStream('./template4.html');
        }
    },
    upload = ctx => {
        console.log(ctx.request.body);
        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    };

app.use(koaBody()).use(_.get('/', router.index)).use(_.post('/upload', upload)).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
