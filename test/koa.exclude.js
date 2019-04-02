import KoaBody from 'koa-body';

const Chinaums = require('../src/chinaums');
const confifg = require('../config');
const Router = require('koa-router'); // x导入koa路由
const Koa = require('koa');

const app = new Koa();
const router = new Router();
const chinaums = new Chinaums(confifg);

app.use(KoaBody({
  multipart: true,
  formidable: {
    keepExtensions: true,
    hash: 'md5',
  },
}));

router.post('/', async (ctx) => {
  const { body } = ctx.request;
  const verifyResult = chinaums.verifyNotify(body);
  console.log(`verifyResult:${verifyResult} body:${JSON.stringify(body)}`);
  if (verifyResult && body.status === 'TRADE_SUCCESS') {
    ctx.body = 'SUCCESS';
  } else {
    ctx.body = 'FAILED';
  }
});
app.use(router.routes());
app.listen(3001, () => {
  console.log('port 3001 is listening');
});
