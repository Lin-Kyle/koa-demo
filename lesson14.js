const Koa = require('koa'),
    compose = require('koa-compose'),
    app = new Koa();

// 一层中间
const mid1 = (ctx, next) => {
    console.log('请求资源：' + ctx.url);
    console.log('一层中间件控制传递下去');
    next();
    console.log('一层中间件控制传递回来');
};

// 二层中间
const mid2 = (ctx, next) => {
    console.log('二层中间件控制传递下去');
    next();
    console.log('二层中间件控制传递回来');
};

// response
const mid3 = ctx => {
    console.log('输出body');
    ctx.body = '暗号：Hello World';
};

app.use(compose([mid1, mid2, mid3])).listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');
// 请求资源：/
// 一层中间件控制传递下去
// 二层中间件控制传递下去
// 输出body
// 二层中间件控制传递回来
// 一层中间件控制传递回来
