const Chinaums = require('../src/chinaums');
const confifg = require('../config/');
const moment = require('moment');

const chinaums = new Chinaums(confifg);
const assert = require('assert');
// mocha测试用例
describe('订单相关', () => {
	it('创建订单', async () => {
		let res = await chinaums.createOrderUrl({
			tid: '88880001',
			totalAmount: 1,
			msgSrc: 'WWW.TEST.COM',
			merOrderId: `3194${moment().format('YYYYMMDDHHmmss')}`,
		});
		assert.ok(res.indexOf('pay.do'));
	});

	it('查询订单', async () => {
		let res = await chinaums.queryOrder({
      merOrderId: '319499028982611111637001000',
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
    });
		assert.ok(res);
	});

	it('订单退款', async () => {
		let res = await chinaums.refunds({
      merOrderId: '319499028982611111637001000',
      tid: '88880001',
      msgSrc: 'WWW.TEST.COM',
    });
		assert.ok(res);
	});

	it('关闭订单', async () => {
		let res = await chinaums.closeOrder({
      msgSrc: 'WWW.TEST.COM',
      merOrderId: '319420160922145952000023114819',
      tid: '88880001',
    });
		assert.ok(res);
	});
});
