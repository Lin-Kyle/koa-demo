const Koa = require('koa'),
    app = new Koa();

// response
app.use(async ctx => {
    console.log('ctx：', ctx);
);

app.listen(3000);
console.log('已建立连接，效果请看http://127.0.0.1:3000/');

// ctx： { request:
//    { method: 'GET',
//      url: '/',
//      header:
//       { host: 'localhost:3000',
//         connection: 'keep-alive',
//         'cache-control': 'max-age=0',
//         'upgrade-insecure-requests': '1',
//         'user-agent':
//          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36',
//         accept:
//          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//         'accept-encoding': 'gzip, deflate, sdch',
//         'accept-language': 'zh-CN,zh;q=0.8',
//         cookie:
//          'loginInfo={"username":"abc","password":"MjIyMjIy","rememberMe":1}' } },
//   response: { status: 404, message: 'Not Found', header: {} },
//   app: { subdomainOffset: 2, proxy: false, env: 'development' },
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>' }
