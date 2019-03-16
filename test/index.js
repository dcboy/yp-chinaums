// const Config = require('../config/');
const Chinaums = require('../src/chinaums');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const confifg = require('../config/');

const chinaums = new Chinaums(confifg);
const assert = require('assert');
describe('订单相关', () => {
  it('创建订单', async () => {
    let res = await chinaums.createOrderUrl();
    console.log(res);
    assert.ok(res.indexOf('pay.do') > 0);
  });

  it('查询订单', async () => {
    // ...
  });

  it('订单退款', async () => {
    // ...
  });

});
