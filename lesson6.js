const Koa = require('koa'),
    fs = require('fs'),
    app = new Koa();

app.use(async ctx => {
    console.log('type: ' + ctx.type);
    switch (ctx.url) {
        case '/':
            ctx.type = 'html';
            ctx.body = fs.createReadStream('./template1.html');
            break;
        case '/template2':
            ctx.type = 'html';
            ctx.body = fs.createReadStream('./template2.html');
            break;
        default:
            ctx.throw(406, 'json, html, or text only');
    }
}).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
