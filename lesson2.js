const Koa = require('koa'),
    app = new Koa();

// 一层中间
app.use((ctx, next) => {
    console.log('请求资源：' + ctx.url);
    console.log('一层中间件控制传递下去');
    next();
    console.log('一层中间件控制传递回来');
    ctx.body = '暗号：Day Day Up';
});

// 二层中间
app.use((ctx, next) => {
    console.log('二层中间件控制传递下去');
    next();
    console.log('二层中间件控制传递回来');
});

// response
app.use(ctx => {
    console.log('输出body');
    ctx.body = '暗号：Good Good Study';
});

app.listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');

// 一层中间件控制传递下去
// 二层中间件控制传递下去
// 输出body
// 二层中间件控制传递回来
// 一层中间件控制传递回来
