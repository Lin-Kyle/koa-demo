const Koa = require('koa'),
    _ = require('koa-route'),
    fs = require('fs'),
    app = new Koa();

const route = {
    index: (ctx) => {
        //doSomethings
        ctx.type = 'html';
        ctx.body = fs.createReadStream('./template1.html');
    },
    template2: (ctx) => {
        //doSomethings
        ctx.type = 'html';
        ctx.body = fs.createReadStream('./template2.html');
    }
};

app.use(_.get('/', route.index)).use(_.get('/template2', route.template2)).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
