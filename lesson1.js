const Koa = require('koa'),
    app = new Koa();

app.use(async ctx => {
    ctx.body = '暗号：Hello World';
}).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
