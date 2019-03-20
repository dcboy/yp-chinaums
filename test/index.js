/* eslint-disable no-console */
const moment = require('moment');
const Chinaums = require('../src/chinaums');
const confifg = require('../config/');

const chinaums = new Chinaums(confifg);
const assert = require('assert');

// mocha测试用例
describe('订单相关', () => {
  it('创建订单', async () => {
    const res = chinaums.createOrderUrl({
      tid: '88880001',
      totalAmount: 1,
      msgSrc: 'WWW.TEST.COM',
      merOrderId: `3194${moment().format('YYYYMMDDHHmmss')}`,
      notifyUrl: 'http://chinaums.frpgz1.idcfengye.com/',
    });
    console.log(res);
    assert.ok(res.indexOf('pay.do'));
  });

  it('查询订单', async () => {
    const res = await chinaums.queryOrder({
      merOrderId: '319420190320115709',
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });

  it.skip('订单退款', async () => {
    const res = await chinaums.refunds({
      merOrderId: '319420190319135454',
      tid: '88880001',
      refundAmount: 1,
      msgSrc: 'WWW.TEST.COM',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });

  it.skip('关闭订单', async () => {
    const res = await chinaums.closeOrder({
      msgSrc: 'WWW.TEST.COM',
      merOrderId: '319420190318105008',
      tid: '88880001',
    });
    console.log(res);
    assert.ok(res.errCode === 'SUCCESS');
  });
});
