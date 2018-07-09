const Koa = require('koa'),
    _ = require('koa-route'),
    serve = require('koa-static')(__dirname + '/img/'),
    fs = require('fs'),
    app = new Koa();

const router = {
    index: (ctx) => {
        //doSomethings
        ctx.type = 'html';
        ctx.body = fs.createReadStream('./template3.html');
    }
};
app.use(serve).use(_.get('/', router.index)).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
