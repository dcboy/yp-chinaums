const Chinaums = require('../src/chinaums');
const confifg = require('../config/');

const moment = require('moment');

const chinaums = new Chinaums(confifg);
const assert = require('assert');

// mocha测试用例
describe('订单相关', () => {
  // it('创建订单', async () => {
  //   const res = chinaums.createOrderUrl({
  //     tid: '88880001',
  //     totalAmount: 1,
  //     msgSrc: 'WWW.TEST.COM',
  //     merOrderId: `3194${moment().format('YYYYMMDDHHmmss')}`,
  //     notifyUrl: 'http://chinaums.frpgz1.idcfengye.com/',
  //   });
  //   console.log(res);
  //   assert.ok(res.indexOf('pay.do'));
  // });

  it('查询订单', async () => {
    const res = await chinaums.queryOrder({
      merOrderId: '319420190320105432',
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
    });
    console.log(res);
    assert.ok(res);
  });

  // it('订单退款', async () => {
  // 	let res = await chinaums.refunds({
  // 		merOrderId: '319420190319135454',
  // 		tid: '88880001',
  // 		refundAmount: 1,
  // 		msgSrc: 'WWW.TEST.COM'
  // 	});
  // 	console.log(res);
  // 	assert.ok(res);
  // });

  // it('关闭订单', async () => {
  // 	let res = await chinaums.closeOrder({
  // 		msgSrc: 'WWW.TEST.COM',
  // 		merOrderId: '319420190318105008',
  // 		tid: '88880001',
  // 	});
  // 	console.log(res);
  // 	assert.ok(res);
  // });
});
