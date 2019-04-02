/* eslint-disable no-console */
const moment = require('moment');
const Chinaums = require('../src/chinaums');
const confifg = require('../config/');

const chinaums = new Chinaums(confifg);
const assert = require('assert');

const mid = '898340149000005';

// mocha测试用例
describe('订单相关', () => {
  it('创建订单', async () => {
    const res = chinaums.createOrderUrl({
      mid,
      tid: '88880001',
      totalAmount: 1,
      msgSrc: 'WWW.TEST.COM',
      merOrderId: `3194${moment().format('YYYYMMDDHHmmss')}`,
      notifyUrl: 'http://2fef574a.ngrok.yopoint.cc:81/',
      msgType: 'WXPay.jsPay',
    });
    console.log(res);
    assert.ok(res.indexOf('pay.do'));
  });

  it('查询订单', async () => {
    const res = await chinaums.queryOrder({
      mid,
      merOrderId: '319420190326213641',
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });

  it.skip('订单退款', async () => {
    const res = await chinaums.refunds({
      mid,
      tid: '88880001',
      merOrderId: '319420190319135454',
      refundAmount: 1,
      msgSrc: 'WWW.TEST.COM',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });

  it.skip('关闭订单', async () => {
    const res = await chinaums.closeOrder({
      mid,
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
      merOrderId: '319420190318105008',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });
});
