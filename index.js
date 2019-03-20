// module.exports = require('./lib/chinaums');
const Chinaums = require('./src/chinaums');
const Router = require('koa-router'); // x导入koa路由
const Koa = require('koa');

const app = new Koa();
const router = new Router();
const KoaBody = require('koa-bodyparser');
// json
app.use(KoaBody({}));
const chinaums = new Chinaums({ key: 'fcAmtnx7MwismjWNhNKdHC44mNXtnEQeJkRrhKJwyrW2ysRR' });
router.post('/', async (ctx) => {
  const { body } = ctx.request;
  if (body.status === 'TRADE_SUCCESS' && chinaums.verifyNotify(body)) {
    ctx.body = 'SUCCESS';
  } else {
    ctx.body = 'FAILED';
  }
});
app.use(router.routes());
app.listen(3001, () => {
  console.log('port 3001 is listening');
});
